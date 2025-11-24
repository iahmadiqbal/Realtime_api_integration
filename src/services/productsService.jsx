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

export const FetchSingleProduct = async ({ id }) => {
  try {
    const singleproduct = await fetch(`${BASE_URL}/products/${id}`);

    if (!singleproduct.ok) {
      throw new Error("Failed to fetch the single product");
    }

    const data = await singleproduct.json();
    console.log("get a single product", data);
    return data;
  } catch (error) {
    console.log("something went wrong! try again", error);
    throw new Error("Something went wrong");
  }
};

// update a product by ID

// Delte a product by ID
