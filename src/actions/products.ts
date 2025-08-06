"use server";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI",
    price: 29.99,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    image: "https://example.com/images/wireless-mouse.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with long battery life",
    price: 89.99,
    category: "Electronics",
    inStock: false,
    rating: 4.7,
    image: "https://example.com/images/bluetooth-headphones.jpg",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh",
    price: 59.95,
    category: "Sportswear",
    inStock: true,
    rating: 4.3,
    image: "https://example.com/images/running-shoes.jpg",
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description: "Insulated bottle that keeps drinks cold for 24 hours",
    price: 19.99,
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.8,
    image: "https://example.com/images/water-bottle.jpg",
  },
  {
    id: 5,
    name: "Notebook",
    description: "A5 hardcover ruled notebook with 200 pages",
    price: 6.49,
    category: "Stationery",
    inStock: true,
    rating: 4.1,
    image: "https://example.com/images/notebook.jpg",
  },
];

export const searchProduct = async (searchTerm: string) => {
  console.log("getting db call");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredProducts;
};
