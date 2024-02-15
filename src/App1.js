import React, { useState, useMemo } from "react";
import { createBrowserRouter, HashRouter, RouterProvider } from "react-router-dom";

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
    // <HashRouter>
      <DataProvider>
        <HashRouter router={router} />
        {openModal && <Modal onCloseModal={closeModalHandler} />}
      </DataProvider>
    // </HashRouter>
  )
}