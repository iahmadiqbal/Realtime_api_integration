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
