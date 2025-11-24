"use client";

import { BASE_URL } from "@/lib/api";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    console.log("API Response: ", data);
    return data;
  } catch (error) {
    console.log("API Error: ", error);
    throw error;
  }
};

// Fetch single product by ID
export const GetSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
//   update  a product by ID

//   delte a product by ID
