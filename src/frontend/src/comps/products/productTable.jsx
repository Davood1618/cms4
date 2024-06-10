import React, { useState } from "react";
import "./productTable.css";
import oilImg from "./../../img/oil.png";
import ProductDeleteModals from "./ProductDeleteModals";
import ProductDetailModal from "./productDetailModal";
import EditProduct from "./../editProduct/editProduct";
import { useEffect } from "react";
import product from "./product";

export default function ProductTable() {
  const [prMsg, setPrMsg] = useState(false);
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [editProductModalShow, setEditProductModalShow] = useState(false);
  const [allProducts, setAllProducts] = useState([]);


 

  useEffect(() => {
    fetch('http://localhost:8000/posts/all').then(res => res.json()).then(data => console.log(data));
  }, []);
  






  


  const submitModalAction = () => {
    console.log("submitted");};

  const cancelModalAction = () => {
    console.log("canceled");
    setPrMsg(false);};

  const closeDetailModalBtn = () => {
    setDetailModalShow(false);};

  const closeEditlModalBtn = () => {
    setEditProductModalShow(false);};

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("updated");};



  return (
    <>
      {detailModalShow && (
        <ProductDetailModal closeDetailModal={closeDetailModalBtn} />
      )}
      {editProductModalShow && (
        <EditProduct
          closeEditModal={closeEditlModalBtn}
          submitEditModal={updateProductInfos}>
                  <div className="prEdInp">
            <input type="text" placeholder="محصول مورد نظر را وارد کنید"/>
            <input type="text" placeholder="محصول مورد نظر را وارد کنید"/>
            <input type="text" placeholder="محصول مورد نظر را وارد کنید"/>
            <input type="text" placeholder="محصول مورد نظر را وارد کنید"/>
          </div>
        </EditProduct>
      )}
      <div className="productTableContainer">
        <table className="productTable">
          <head className="productHead">
            <th className="productTh">عکس</th>
            <th className="productTh">اسم</th>
            <th className="productTh">قیمت</th>
            <th className="productTh">موجودی</th>
            <td className="productTd firstProductTd">
              <button className="productButton">detail</button>
              <button className="productButton">buy</button>
              <button className="productButton">edit</button>
            </td>
          </head>
          {allProducts.map(product=>(

            <tr className="productTr">
            <td className="productTd">
              <img src={oilImg} className="productImg" />
            </td>
            <td className="productTd">{product.title}</td>
            <td className="productTd">5</td>
            <td className="productTd">5</td>
            <td className="productTd lastProductTd">
              <button
                className="productButton btn btn-sm btn-primary"
                onClick={() => setDetailModalShow(true)}>
                جزییات
              </button>
              <button
                className="productButton btn btn-sm btn-primary"
                onClick={() => setPrMsg(true)}>
                حذف
              </button>
              <button
                className="productButton btn btn-sm btn-primary"
                onClick={() => setEditProductModalShow(true)}>
                ویرایش
              </button>
            </td>
          </tr>
          ))}

        </table>
      </div>
      {prMsg && (
        <ProductDeleteModals
          submitAction={submitModalAction}
          cancelAction={cancelModalAction}
        />
      )}
    </>
  );
}
