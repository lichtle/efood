import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import { BackgroundContainer } from "./styles";

import logo from "../../assets/logo.png";

const DishesHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);

  return (
    <BackgroundContainer>
      <div className="container">
        <h1>Restaurantes</h1>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        {items.length === 1 ? (
          <span>1 produto no carrinho</span>
        ) : (
          <span>{items.length} produtos no carrinho</span>
        )}
      </div>
    </BackgroundContainer>
  );
};

export default DishesHeader;
