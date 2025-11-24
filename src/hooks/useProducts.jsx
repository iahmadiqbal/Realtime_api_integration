"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  FetchSingleProduct,
  updateProduct,
} from "@/services/productsService";

// Hook to Get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
};

//  Hook to Get single Products
export const useFetchSingleProduct = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => FetchSingleProduct({ id }),
    enabled: !!id,
    staleTime: 60 * 1000,
  });
};

// Hook to update the product id

// How to delete the product through id
