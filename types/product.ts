export type Product = {
  id: string;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
  image: string;
  url: string;
};

export type ProductSource = "yml" | "local";
