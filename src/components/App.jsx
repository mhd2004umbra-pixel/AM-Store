import Header from "./header";
import Footer from "./footer";
import ProductCard from "./cards";
import { Products } from "./products";
import Buttons from "./buttons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteList from "./favourite-list";
import CartMenu from "./cart-menu";
import Dashboard from "./dashboard";

function Comparison() {
  return <main className=" :uno: p-6 text-center text-xl">Comparison</main>;
}

function Home() {
  return (
    <main className=" :uno: auto-smart-grid m-[10px]">
      {Products.map((item) => (
        <ProductCard key={item.id} Products={item} />
      ))}
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className=" :uno: w-full min-h-screen bg-[#FDFBF7] flex flex-col">
        <Header />
        <Buttons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/favourite-list" element={<FavouriteList />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/cart-menu" element={<CartMenu />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
