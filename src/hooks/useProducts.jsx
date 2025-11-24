"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, GetSingleProduct } from "@/services/productsService";

// Hook to Get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
};

export const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ["singleproduct", id],
    queryFn: () => GetSingleProduct(id),
    enabled: !!id,
  });
};

//  Hook  to Get single Products

// Hook to update the product  By Id

// Hook to delete the product  By id
