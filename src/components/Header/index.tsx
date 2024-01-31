import { BackgroundContainer } from "./styles";

import logo from "../../assets/logo.png";

const Header = () => (
  <>
    <BackgroundContainer>
      <div className="container">
        <img src={logo} alt="efood" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
    </BackgroundContainer>
  </>
);

export default Header;
