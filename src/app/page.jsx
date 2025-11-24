"use client";

import GetAllProducts from "./components/getallproducts/page";
import GetSingleProduct from "./components/getsingleproudct/page";
import UpdateProduct from "./components/updateproduct/page";

export default function Home() {
  return (
    <div className="p-6">
      {/* <GetAllProducts /> */}
      <GetSingleProduct id={2} />
    </div>
  );
}
