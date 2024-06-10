import React, { useEffect } from "react";
import './productDetailModal.css'
import { VscClose } from "react-icons/vsc";


export default function ProductDetailModal({closeDetailModal}) {
    useEffect(()=>{
        const closeDet=(event)=>{
            if (event.keyCode===27){
                closeDetailModal()
            }
        }
        window.addEventListener('keydown', closeDet)
        // return window.removeEventListener('keydown', closeDet)
    })

    // const closeDe=()=>{
    //     closeDetailModal()
    // }
  return (
    <div className="productTableFrame">
      <table className="productDetailTable active">
        {/* <VscClose className='produtctDetailCloseBtn' onClick={()=>console.log('close')}/> */}

        <tbody className="productDetalHead">
               <th>اسم</th>
          <th>قیمت</th>
          <th>محبوبیت</th>
          <tr>لبتاب</tr>
          <tr>1200000</tr>
          <tr>91٪</tr>
        </tbody>
       
      </table>
    </div>
  );
}
