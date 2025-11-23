"use client";

import { useGetProducts } from "@/hooks/useProducts";

export default function ProductsList() {
  const { data, isLoading, error } = useGetProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">All Products</h2>

      <ol className="space-y-2">
        {data?.map((product) => (
          <li
            key={product.id}
            className="p-3 border rounded-lg bg-white shadow"
          >
            {product.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
