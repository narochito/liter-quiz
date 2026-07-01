import type { Product } from "@/types/product";

/**
 * Fallback products when the YML feed is unavailable.
 * Replace image paths with local assets in /public/images/products/.
 */
export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "fallback-1",
    title: "Футболка Пушкин: «Я ль на свете всех милее?»",
    description: "100% хлопок, вышивка, цитата классика",
    price: 3500,
    currency: "RUB",
    image: "/images/products/product-1.jpg",
    url: "https://narochito.ru/products/pushkin-100010",
  },
  {
    id: "fallback-2",
    title: "Футболка Толстой: «Хочется жаловаться»",
    description: "Мягкий хлопок для каждодневной носки",
    price: 3500,
    currency: "RUB",
    image: "/images/products/product-2.jpg",
    url: "https://narochito.ru/products/lev-tolstoy-hochetsa-zhalovatsa-100018",
  },
  {
    id: "fallback-3",
    title: "Футболка Чехов: «Не верю, что я отдыхаю»",
    description: "Ироничная цитата для отпускного настроения",
    price: 3990,
    currency: "RUB",
    image: "/images/products/product-3.jpg",
    url: "https://narochito.ru/products/futbolka-otdyhay-3-100017",
  },
  {
    id: "fallback-4",
    title: "Футболка Достоевский: «Холод только для погоды»",
    description: "Цитата для тех, кто не впускает холод в душу",
    price: 3500,
    currency: "RUB",
    image: "/images/products/product-4.jpg",
    url: "https://narochito.ru/products/dostoevsky-holod-100019",
  },
];
