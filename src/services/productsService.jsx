import { BASE_URL } from "@/lib/api";
//  Get All products
export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
