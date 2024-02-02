import { Container } from "./styles";

import { RestaurantType } from "../Restaurant";

const Banner = ({ tipo, titulo, capa }: RestaurantType) => (
  <Container image={capa}>
    <div className="container">
      <span>{tipo}</span>
      <h3>{titulo}</h3>
    </div>
  </Container>
);

export default Banner;
