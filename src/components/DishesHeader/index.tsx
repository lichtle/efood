import { Link } from "react-router-dom";

import { BackgroundContainer } from "./styles";

import logo from "../../assets/logo.png";

const DishesHeader = () => (
  <BackgroundContainer>
    <div className="container">
      <h1>Restaurantes</h1>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <span>0 produto(s) no carrinho</span>
    </div>
  </BackgroundContainer>
);

export default DishesHeader;
