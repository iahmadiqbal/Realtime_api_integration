"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  FetchSingleProduct,
  UpdateProduct,
  DeleteProduct,
} from "@/services/productsService";

// Hook to get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
};

// Hook to get a single product
export const useFetchSingleProduct = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => FetchSingleProduct({ id }),
    enabled: !!id,
    staleTime: 60 * 1000,
  });
};

// Hook to update a product by ID
export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: ({ id, updateData }) => UpdateProduct(id, updateData),
  });
};

// Delete the product by ID
export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: ({ id }) => DeleteProduct(id),
  });
};
