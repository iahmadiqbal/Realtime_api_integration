import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/productsService";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
