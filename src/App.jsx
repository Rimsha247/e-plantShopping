import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful and
          healthy houseplants. We offer a variety of plants to bring nature,
          freshness, and beauty into your home.
        </p>

        <a href="/plants" className="get-started">
          Get Started
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;