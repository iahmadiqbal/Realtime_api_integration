"use client";

import ProductsList from "./products/components/ProductsList";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tanstack Query</h1>
      <ProductsList />
    </div>
  );
}
