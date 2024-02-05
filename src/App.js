import React, { useState, useMemo } from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import Main from "./pages/Main"
import MainLayout from "./pages/MainLayout";
import ExpenseList from "./pages/ExpenseList";
import Wallet from "./pages/Wallet";
import Modal from "./components/Modal/Modal";
import DataProvider from "./store/money-data";


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
          {path: "/mimispace1", element: <Main />},
          {path: "/mimispace1/ExpenseList", element: <ExpenseList onOpenModal={openModalHandler} onCloseAddItem={closeModalHandler} />},
          {path: "/mimispace1/Wallet", element: <Wallet />}
        ]
      }
    ]);  
  }, []);
  
  return (
    <BrowserRouter basename="https://mimi-miyeon.github.io/household/">
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <DataProvider>
        <RouterProvider router={router} />
        {openModal && <Modal onCloseModal={closeModalHandler} />}
      </DataProvider>
    </BrowserRouter>
  )
}