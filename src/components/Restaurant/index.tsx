import { Card, Tags, About, NameRate, Rating, Button } from "./styles";

import Tag from "../Tag";

import star from "../../assets/star.png";
import sushi from "../../assets/sushi.png";

const Restaurant = () => (
  <>
    <Card>
      <Tags>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
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
        <Button to="/product-details">Saiba mais</Button>
      </About>
    </Card>
  </>
);

export default Restaurant;
