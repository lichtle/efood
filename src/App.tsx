import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles";

import Home from "./pages/home";
import RestaurantDetails from "./pages/restaurant-details";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurant-details",
    element: <RestaurantDetails />,
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
