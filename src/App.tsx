import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import { GlobalStyle } from "./styles";

import Rotas from "./routes";

import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
