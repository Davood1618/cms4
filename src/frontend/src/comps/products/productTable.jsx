import React, { useState } from "react";
import { useEffect } from "react";
import "./productTable.css";
import ProductDeleteModals from "./ProductDeleteModals";
import ProductDetailModal from "./productDetailModal";
import EditProduct from "./../editProduct/editProduct";
import Error from "./../error/error";
import product from "./product";

export default function ProductTable() {
  const [deleteProductModalShow, setdeleteProductModalShow] = useState(false);
  const [detailProductModalShow, setDetailProductModalShow] = useState(false);
  const [editProductModalShow, setEditProductModalShow] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [mainDetailProduct, setMainDetailProduct] = useState({});


  const getAllProducts = () => {
    fetch("http://localhost:8000/products/all")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products));
  };

  // fetch functions//

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/products/delete/${productId}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {});
    setdeleteProductModalShow(false);
    getAllProducts();
  };


  // const updateModalSubmitAction = () => {
  //   fetch(`http://localhost:8000/products/update/${productId}`, {
  //     method: "POST",
  //     headers:{
  //       "Content_Type":'application/json'
  //     },
  //     body:JSON.stringify(updatedProductInfo)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {console.log(data)});
  //     // setEditProductModalShow(false);
  //   getAllProducts();
  // };

  useEffect(() => {
    getAllProducts();
  }, []);

  // button of those 3 modals...

  // delete button for close modal
  const cancelModalAction = () => {
    setdeleteProductModalShow(false);
    console.log("canceled");
  };

  // detail button for close modal
  const closeDetailModalBtn = () => {
    setDetailProductModalShow(false);
  };

  // 2 edit buttons
  const closeEditlModalBtn = () => {
    setEditProductModalShow(false);
  };

  const editeProductInfos = (event) => {
    event.preventDefault();
    console.log("updated");
  };

  return (
    <>
      {/* update & detail & delete product modal */}
      {editProductModalShow && (
        <EditProduct
          closeEditModal={closeEditlModalBtn}
          submitEditModal={editeProductInfos}
        >
          <div className="prEdInp">
            <input type="text" placeholder="اسم محصول را وارد کنید" valu/>
            <input type="text" placeholder="قیمت محصول را وارد کنید" />
            <input type="text" placeholder="تعداد محصول را وارد کنید" />
            <input type="text" placeholder="عکس محصول را وارد کنید" />
            <input type="text" placeholder="رنگ محصول را وارد کنید" />
          </div>
        </EditProduct>
      )}

      {detailProductModalShow && (
        <ProductDetailModal closeDetailModal={closeDetailModalBtn}>
          <th>اسم</th>
          <th>قیمت</th>
          <th>تعداد</th>
          <tr>{mainDetailProduct.title}</tr>
          <tr>{mainDetailProduct.price.toLocaleString()}</tr>
          <tr>{mainDetailProduct.count}</tr>
        </ProductDetailModal>
      )}

      {deleteProductModalShow && (
        <ProductDeleteModals
          submitAction={deleteModalSubmitAction}
          cancelAction={cancelModalAction}
        />
      )}

      {/* product head then table */}
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

          {/* product table */}
          {!allProducts ? (
            <Error title={"محصول"} />
          ) : (
            allProducts.map((prod) => (
              <tr className="productTr">
                <td className="productTd">
                  <img src={prod.img} className="productImg" />
                </td>

                <td className="productTd">{prod.title}</td>
                <td className="productTd">{prod.price.toLocaleString()}</td>
                <td className="productTd">{prod.count}</td>
                <td className="productTd lastProductTd">
                  <button
                    className="productButton btn btn-sm btn-primary"
                    onClick={() => {
                      setDetailProductModalShow(true);
                      setProductId(prod._id);
                      setMainDetailProduct(prod);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="productButton btn btn-sm btn-primary"
                    onClick={() => {
                      setdeleteProductModalShow(true);
                      setProductId(prod._id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="productButton btn btn-sm btn-primary"
                    onClick={() => {
                      setEditProductModalShow(true);
                      setProductId(prod._id)
                      // updateModalSubmitAction()
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))
          )}
        </table>
      </div>
    </>
  );
}
