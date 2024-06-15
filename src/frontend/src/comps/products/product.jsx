import React from "react";
import "./products.css";
import { useState, useEffect } from "react";

export default function ({ getAllProducts }) {
  const [newTitle, setNewTitle] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newCount, setNewCount] = useState();
  const [newImg, setNewImg] = useState();
  const [newColor, setNewColor] = useState();

  const newProductObj = {
    title: newTitle,
    price: newPrice,
    count: newCount,
    img: newImg,
    colors: newColor,
  };

  const emptyNewProductBox = ()=>{
    setNewTitle("");
    setNewPrice("");
    setNewCount("");
    setNewImg("");
    setNewColor("");

  }



  const submitNewProduct = () => {
    fetch(`http://localhost:8000/products/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllProducts();
        emptyNewProductBox()
      });


  };

  return (
    <div>
      <div className="productMainContainer">
        <h5 className="productTitle">محصول خود را وارد کنید</h5>

        <div className="productFrameWrapper">
          <div className="productInternalFrame">
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="اسم محصول را وارد کنید"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="قیمت محصول را بنویسید"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="تعداد محصول را بنویسید"
                value={newCount}
                onChange={(event) => setNewCount(event.target.value)}
              />
            </div>

            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="عکس محصول را بنویسید"
                value={newImg}
                onChange={(event) => setNewImg(event.target.value)}
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="رنگ محصول را بنویسید"
                value={newColor}
                onChange={(event) => setNewColor(event.target.value)}
              />
            </div>

            <button
              className="btn btn-success productBtn"
              onClick={submitNewProduct}
            >
              {" "}
              subbmit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
