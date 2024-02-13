import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import RestaurantDetails from "./pages/RestaurantDetails";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantDetails />} />
  </Routes>
);

export default Rotas;
