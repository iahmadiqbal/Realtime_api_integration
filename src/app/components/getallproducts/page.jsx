"use client";

import { useGetAllProducts } from "@/hooks/useProducts";

const GetAllProducts = () => {
  const { data, isLoading, isError } = useGetAllProducts();
  console.log("get all products", data);

  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went wrong with the API</h1>;

  return (
    <>
      <h1>Product list is here</h1>

      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.body}</p>
            <p>Category: {item.category}</p>
            {item.image && (
              <img src={item.image} alt={item.title} width={100} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetAllProducts;
