"use client";

import React from "react";
import { useGetSingleProduct } from "@/hooks/useProducts";

const GetSingleProduct = ({ id }) => {
  const { data, isLoading, isError } = useGetSingleProduct(id);

  if (isLoading) return <h1>Data is loading...</h1>;

  if (isError) return <h1>Something went wrong...</h1>;

  if (!data) return <h1>No product found</h1>;

  return (
    <ol>
      <li>
        <strong>Title:</strong> {data.title}
      </li>
      <li>
        <strong>Description:</strong> {data.description}
      </li>
      <li>
        <strong>Category:</strong> {data.category}
      </li>
      {data.image && (
        <li>
          <strong>Image:</strong> <br />
          <img src={data.image} alt={data.title} width={150} />
        </li>
      )}
    </ol>
  );
};

export default GetSingleProduct;
