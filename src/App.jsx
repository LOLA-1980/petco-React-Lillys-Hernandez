import React from "react";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Inicio from "./components/Inicio/Inicio";
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenidos a P E T C O !!!"} />
      <div className="container">
        <Banner />
      </div>
      <Inicio></Inicio>
      <Footer />
    </div>
  );
}

export default App;