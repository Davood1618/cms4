import React, { useState } from "react";
import "./ProductDeleteModals.css";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

export default function ProductDeleteModals({submitAction,cancelAction}) {
    const [productDelFt, setProductDelFt]=useState(null)


    
  return ReactDOM.createPortal(
    <div className="productModalParentContainer active">
      <div className="productModelFrame">
        <div className="productModalContainer">
          <h6 className="productModalTitle">
            آیا از حذف این بخش اطمینان دارید؟
          </h6>
          <div className="buttonContainer">
            <button className="btn btn-danger productButton" onClick={()=>submitAction()}>بله</button>
            <button className="btn btn-success productButton" onClick={()=>cancelAction()}>خیر</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("productModal")

  );
}
