import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./style.css";
import Main from "./pages/Main/Main"
import MainLayout from "./pages/MainLayout";
import ExpenseList from "./pages/ExpenseList";
import Wallet from "./pages/Wallet";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      {path: "/", element: <Main />},
      {path: "/ExpenseList", element: <ExpenseList />},
      {path: "/Wallet", element: <Wallet />}
    ]
  }
])

export default function App() 
{
  return (
    <RouterProvider router={router} />
  )
}