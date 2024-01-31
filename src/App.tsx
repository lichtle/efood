import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles";

import Home from "./pages/home";
import ProductDetails from "./pages/product-details";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-details",
    element: <ProductDetails />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  );
}

export default App;
