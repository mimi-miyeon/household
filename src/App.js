import React, { useState, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import Main from "./pages/Main"
import MainLayout from "./pages/MainLayout";
import ExpenseList from "./pages/ExpenseList";
import Wallet from "./pages/Wallet";
import Modal from "./components/Modal/Modal";


export default function App() {  
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const router = useMemo(()=>{
    return createBrowserRouter([
      {
        path: "/", 
        element: <MainLayout />,
        children: [
          {path: "/", element: <Main />},
          {path: "/ExpenseList", element: <ExpenseList onOpenModal={openModalHandler} onCloseAddItem={closeModalHandler} />},
          {path: "/Wallet", element: <Wallet />}
        ]
      }
    ]);  
  }, []);
  
  return (
    <>
      <RouterProvider router={router} />
      {openModal && <Modal onCloseModal={closeModalHandler} />}
    </>
  )
}