"use client";

import { BASE_URL } from "@/lib/api";

// Fetch all products
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
    console.log("Something went wrong! Try again", error);
    throw new Error("Something went wrong");
  }
};

// Update a product by ID
export const UpdateProduct = async (id, updateData) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      console.log("Failed to update the product");
      throw new Error("Failed to update the product");
    }

    const data = await response.json();
    console.log("Updated product data:", data);
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
    throw new Error("Something went wrong");
  }
};

// Delete a product by ID
export const DeleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log("Failed to delete the product");
      throw new Error("Failed to delete the product");
    }

    console.log(`Product with ID ${id} deleted successfully`);
    return { id };
  } catch (error) {
    console.log("Something went wrong", error);
    throw new Error("Something went wrong");
  }
};
