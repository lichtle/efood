import { GlobalStyle } from "./styles";

import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsList />
      <Footer />
    </>
  );
}

export default App;
