import { FooterContainer, List } from "./styles";

import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src={logo} alt="efood" />
      <nav>
        <List>
          <li>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </List>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{" "}
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
