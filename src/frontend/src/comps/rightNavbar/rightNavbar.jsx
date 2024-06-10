import React from "react";
import "./rightNavbar.css";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDiscount } from "react-icons/md";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';



export default function rightNavbar() {
  return (
    <div className="wrappers end-0 top-0">
      
      <div id="sidebar-wrapper">
        <div className="memberName">
          <p>به داشبرد خوش آمدید</p>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            {/* <h3 className="memberName">welcome davood</h3> */}
            {/* <a href="#">Start Bootstrap</a> */}
          </li>
          <li>
            <RxDashboard className="icon" />
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <MdOutlineProductionQuantityLimits className="icon" />
            <Link to="/products">محصولات</Link>
          </li>
          <li>
            <FaRegComment className="icon" />
            <Link to="/comments">کامنت ها</Link>
          </li>
          <li>
            <FaRegUser className="icon" />
            <Link to="/users">کاربران</Link>
          </li>
          <li>
            <SlBasket className="icon" />
            <Link to="/orders">سفارش ها</Link>
          </li>
          <li>
            <MdOutlineDiscount className="icon" />
            <Link to="/discounts">تخفیف ها</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
