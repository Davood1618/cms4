import React from "react";
import Error from "./../error/error";
import Product from "./product";
import ProductTable from "./productTable";
import ProductDeleteModals from "./ProductDeleteModals";
import { useState } from "react";

export default function Products() {

  return (
    <div>
      {/* <Error title={"محصول"}/> */}

      <Product />
      <ProductTable/>
    </div>
  );
}
