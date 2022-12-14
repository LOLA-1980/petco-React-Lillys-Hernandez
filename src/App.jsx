import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
//import Banner from "./components/Banner/Banner";
import Inicio from "./components/Inicio/Inicio";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      {/*<div className="container">
        <Banner />
      </div>*/}
      {/*<Inicio></Inicio>*/}
      <Footer />
    </BrowserRouter>
  );
}

export default App;