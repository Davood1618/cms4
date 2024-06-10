import React, { useEffect } from "react";
import "./editProduct.css";

export default function EditProduct({
  children,
  closeEditModal,
  submitEditModal,
}) {
  useEffect(() => {
    const closeDet = (event) => {
      if (event.keyCode === 27) {
        closeEditModal();
      }
    };
    window.addEventListener("keydown", closeDet);
    // return window.removeEventListener('keydown', closeDet)
  });

  return (
    <div className="productFormWrapper">
      <div className="editpr">
        <form className="prContentWrapper">
          <h5 className="productEditH">محصول مورد نظر را ویرایش کنید</h5>
          {children}
   
          <div className="btnWrapper">
            <button
              className="editProductBtn btn btn-primary"
              onClick={submitEditModal}
            >
              <span className="editProductH">اطلاعات را وارد کنید </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
