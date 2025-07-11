import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Global/Layout";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop/Index";
import ProductDetailPage from "./pages/ProductDetails/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* "/" renders Home */}
          <Route path="shop" element={<ShopPage />} />  {/* "/about" renders About */}
          <Route path="product-detail" element={<ProductDetailPage />} />  {/* "/contact" renders Contact */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
