import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import HowTo from "./components/howTo/howTo";
import ProductList from "./components/catalogue/catalogueView/productList";

import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nosotros" element={<AboutUs />}></Route>
          <Route exact path="/comoComprar" element={<HowTo />}></Route>
          <Route exact path="/catalogo" element={<ProductList />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
