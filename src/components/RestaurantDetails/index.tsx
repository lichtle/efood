import { Link } from "react-router-dom";

import { BackgroundContainer, DetailsContainer, DishesList } from "./styles";

import Dish from "../Dish";

import logo from "../../assets/logo.png";

const Details = () => (
  <>
    <BackgroundContainer>
      <div className="container">
        <h1>Restaurantes</h1>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <span>0 produto(s) no carrinho</span>
      </div>
    </BackgroundContainer>
    <DetailsContainer>
      <div className="container">
        <h3>Italiana</h3>
        <span>La Dolce Vita Trattoria</span>
      </div>
    </DetailsContainer>
    <DishesList className="container">
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </DishesList>
  </>
);

export default Details;
