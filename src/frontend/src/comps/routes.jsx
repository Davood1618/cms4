import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Products from "./products/products";
import Comments from "./comments/comments";
import Users from "./users/users";
import Orders from "./orders/orders";
import Discounts from "./discounts/discounts";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/discounts", element: <Discounts /> },
];

export default routes;
