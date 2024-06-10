import React, { useState } from "react";
import UsernameProvider from "./userContext";
import RightNavbar from "./comps/rightNavbar/rightNavbar";
import Navbar from "./comps/navbar/navbar";
import "./App.css";
import routes from "./comps/routes";
import { useRoutes } from "react-router-dom";
import "./../src/reset.css";
import { Outlet } from "react-router-dom";
import Test from "./test";

export default function App() {
  const mainroutes = useRoutes(routes);
  return (
    <>
      <UsernameProvider>
        <div style={{ flexBasis: "100%" }}>
          <Navbar />
          <div style={{ width: "100%" }}>{mainroutes}</div>
        </div>

        <RightNavbar />
      </UsernameProvider>
    </>
  );
}
