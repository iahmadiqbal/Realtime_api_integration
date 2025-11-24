import { useFetchSingleProduct } from "@/hooks/useProducts";

const GetSingleProduct = ({ id }) => {
  const { data, isLoading, isError } = useFetchSingleProduct(id);

  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Failed to fetch single product</h1>;

  return (
    <>
      <h1>Single Product Details</h1>

      <p>ID: {data?.id}</p>
      <p>Title: {data?.title}</p>
      <p>Description: {data?.description}</p>
      <img src={data?.image} alt={data?.title} width="150" />
    </>
  );
};

export default GetSingleProduct;
