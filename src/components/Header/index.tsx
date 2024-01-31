import { Link } from "react-router-dom";

import { BackgroundContainer } from "./styles";

import logo from "../../assets/logo.png";

const Header = () => (
  <>
    <BackgroundContainer>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
    </BackgroundContainer>
  </>
);

export default Header;
