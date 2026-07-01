import { FALLBACK_PRODUCTS } from "@/data/products";
import type { Product } from "@/types/product";

const YML_FEED_URL =
  "https://yastore-prod-persist.s3.yandex.net/feeds/yml/019aa30b-88ff-7202-b23d-25f0e9af6ff7.xml";

function extractTag(block: string, tag: string): string | undefined {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return match?.[1]?.trim();
}

function cleanProductTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*–\s*купить в интернет-магазине.*/i, "")
    .replace(/^Футболка NAROCHITO\s*–\s*/i, "Футболка ")
    .trim();
}

function truncateDescription(text: string, maxLength = 96): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

function parseOffersFromYml(xml: string): Product[] {
  const offerBlocks = xml.match(/<offer[\s\S]*?<\/offer>/g) ?? [];

  return offerBlocks
    .map((block): Product | null => {
      const id = block.match(/id="([^"]+)"/)?.[1];
      const rawTitle = extractTag(block, "name");
      const url = extractTag(block, "url");
      const priceRaw = extractTag(block, "price");
      const description = extractTag(block, "description");
      const pictureMatch = block.match(/<picture>([^<]+)<\/picture>/);
      const picture = pictureMatch?.[1];

      if (!id || !rawTitle || !url || !picture) {
        return null;
      }

      const price = priceRaw ? Number.parseInt(priceRaw, 10) : undefined;

      return {
        id,
        title: cleanProductTitle(rawTitle),
        description: description ? truncateDescription(description) : undefined,
        price: Number.isFinite(price) ? price : undefined,
        currency: "RUB",
        image: picture,
        url,
      };
    })
    .filter((product): product is Product => product !== null);
}

export async function fetchProductsFromYml(limit = 4): Promise<Product[]> {
  const response = await fetch(YML_FEED_URL, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`YML feed request failed with status ${response.status}`);
  }

  const xml = await response.text();
  const products = parseOffersFromYml(xml);

  return products.slice(0, limit);
}

/**
 * Loads promo products for the result screen.
 * Tries the live YML feed first, then falls back to local placeholders.
 */
export async function getPromoProducts(limit = 4): Promise<Product[]> {
  try {
    const remoteProducts = await fetchProductsFromYml(limit);

    if (remoteProducts.length > 0) {
      return remoteProducts;
    }
  } catch (error) {
    console.warn("[products] YML feed unavailable, using fallback products.", error);
  }

  return FALLBACK_PRODUCTS.slice(0, limit);
}
