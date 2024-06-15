import React from "react";
import Error from "./../error/error";
import Product from "./product";
import ProductTable from "./productTable";
import ProductDeleteModals from "./ProductDeleteModals";
import { useState, useEffect } from "react";

export default function Products() {

  const [allProducts, setAllProducts] = useState([]);
 

  useEffect(() => {
    getAllProducts();
  }, []);



  const getAllProducts = () => {
    fetch("http://localhost:8000/products/all")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products.reverse()));
  };


  return (
    <div>
      {/* <Error title={"محصول"}/> */}

      <Product 
      getAllProducts={getAllProducts}
      />
      <ProductTable 
      getAllProducts={getAllProducts} 
      allProducts={allProducts}
    
       />
    </div>
  );
}
