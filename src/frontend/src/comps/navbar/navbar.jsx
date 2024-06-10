import React from "react";
import "./navbar.css";
import myImg from "./../../img/me.jpg";
import { Outlet } from 'react-router-dom';


export default function navbar() {
  return (
    
      <div className="wrappe">
        <form class="form-inline my-2 my-lg-0 searchBar">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          
          <button class="btn btn-outline-success my-2 my-sm-0 searchBtn" type="submit">
            Search
          </button>
        </form>{" "}
        <div className="titleImg">
          <div className="titleText">
            <h3 className="name">davood mroadi</h3>
            <h5 className="pos">front End Dev</h5>
          </div>
          <img src={myImg} alt="My Image" className="myImg" />
        </div>
      </div>
    
  );
}
