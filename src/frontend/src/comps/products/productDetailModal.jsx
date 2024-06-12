import React, { Children, useEffect } from "react";
import "./productDetailModal.css";
import { VscClose } from "react-icons/vsc";

export default function ProductDetailModal({ closeDetailModal, children }) {
  useEffect(() => {
    const closeDet = (event) => {
      if (event.keyCode === 27) {
        closeDetailModal();
      }
    };
    window.addEventListener("keydown", closeDet);
    // return window.removeEventListener('keydown', closeDet)
  });

  // const closeDe=()=>{
  //     closeDetailModal()
  // }
  return (
    <div className="productTableFrame">
      <table className="productDetailTable active">
        {/* <VscClose className='produtctDetailCloseBtn' onClick={()=>console.log('close')}/> */}


        <tbody className="productDetalHead">
   
       {children}
        </tbody>
      </table>
    </div>
  );
}
