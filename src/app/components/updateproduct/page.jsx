"use client";
import { useState } from "react";
import { useUpdateProduct } from "@/hooks/useProducts";

const UpdateProduct = () => {
  const { mutate, isLoading, isError } = useUpdateProduct();

  if (isLoading) return <h1>Data is loading...</h1>;
  if (isError) return <h1>Something went wrong...</h1>;

  const handleUpdateProduct = () => {
    mutate({
      id: 5,
      updateData: {
        title: "Mens jacket",
        description:
          "I am the paragraph about the Mens jacket, and it has been bought for $50.",
      },
    });
  };

  return (
    <>
      <h1>UpdateProduct is Here</h1>
      <button onClick={handleUpdateProduct}>Update Product</button>
    </>
  );
};

export default UpdateProduct;
