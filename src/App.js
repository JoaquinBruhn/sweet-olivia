import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import ProductList from "./components/catalogue/catalogueView/productList";
import ProductDetail from "./components/catalogue/productDetail/productDetail";

import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/catalogo" element={<ProductList />}></Route>
            <Route exact path="/catalogo/:homeFilter" element={<ProductList />}></Route>
            <Route exact path="/itemDetail/:itemTitle" element={<ProductDetail />}></Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
