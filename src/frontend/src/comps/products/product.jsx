import React from "react";
import "./products.css";

export default function () {
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
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="موجودی محصول را بنویسید"
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="میران محبوبیت محصول را بنویسید"
              />
            </div>

            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="تعداد رنگ بندی محصول را بنویسید"
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="قیمت محصول را بنویسید"
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="ادرس عکس محصول را بنویسید"
              />
            </div>
            <div className="productBox">
              <input
                type="text"
                className="productText px-sm-2 px-md-4 px-lg-6"
                placeholder="میزان فروش محصول را بنویسید"
              />
            </div>
            <button className="btn btn-success productBtn"> subbmit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
