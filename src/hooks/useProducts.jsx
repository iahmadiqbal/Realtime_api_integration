"use client";

import { getAllProducts } from "@/services/productsService";
import { useQuery } from "@tanstack/react-query";

// Hook to Get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
};
