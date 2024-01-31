import { Card, Tags, About, NameRate, Rating } from "./styles";

import Button from "../Button";

import star from "../../assets/star.png";
import sushi from "../../assets/sushi.png";

const Product = () => (
  <>
    <Card>
      <Tags>
        <Button>Destaque da semana</Button>
        <Button>Japonesa</Button>
      </Tags>
      <img src={sushi} />
      <About>
        <NameRate>
          <h2>Hioki Sushi</h2>
          <Rating>
            <span>4.9</span>
            <span>
              <img src={star} />
            </span>
          </Rating>
        </NameRate>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <Button>Saiba mais</Button>
      </About>
    </Card>
  </>
);

export default Product;
