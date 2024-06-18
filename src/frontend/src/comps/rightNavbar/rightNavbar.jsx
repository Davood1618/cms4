import React from "react";
import "./rightNavbar.css";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDiscount } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink  to="/">صفحه اصلی</NavLink >
          </li>
          <li>
            <MdOutlineProductionQuantityLimits className="icon" />
            <NavLink  to="/products">محصولات</NavLink >
          </li>
          <li>
            <FaRegComment className="icon" />
            <NavLink  to="/comments">کامنت ها</NavLink >
          </li>
          <li>
            <FaRegUser className="icon" />
            <NavLink  to="/users">کاربران</NavLink >
          </li>
          <li>
            <SlBasket className="icon" />
            <NavLink  to="/orders">سفارش ها</NavLink >
          </li>
          <li>
            <MdOutlineDiscount className="icon" />
            <NavLink  to="/discounts">تخفیف ها</NavLink  >
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
