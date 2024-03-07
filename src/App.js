import React from "react";
import "./style.css";

import Header from "./components/Header/Header";
import { NavLink } from "react-router-dom";
import Main from "./UI/Main";


export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}