"use client";
import { useDeleteProduct } from "@/hooks/useProducts";

const DeleteProduct = () => {
  const { mutate, isLoading, isError } = useDeleteProduct();

  const handleDeleteProduct = () => {
    mutate(
      { id: 5 },
      {
        onSuccess: (data) => {
          console.log("Deleted product response:", data);
        },
        onError: (error) => {
          console.log("Failed to delete product:", error);
        },
      }
    );
  };

  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went wrong...</h1>;

  return (
    <>
      <h1>Delete Product by ID</h1>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </>
  );
};

export default DeleteProduct;
