"use client";

import { getAllProducts } from "@/services/productsService";
import { getSingleProduct } from "@/services/productsService";
import { useQuery } from "@tanstack/react-query";

// Hook to Get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
};

//  Hook  to Get single Products

// Hook to update the product  By Id

// Hook to delete the product  By id
