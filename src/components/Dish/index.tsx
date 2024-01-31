import { AboutDish } from "./styles";

import pizza from "../../assets/pizza.png";

const Dish = () => (
  <AboutDish>
    <img src={pizza} />
    <h4>Pizza Marguerita</h4>
    <p>
      A clássica Marguerita: molho de tomate suculento, muçarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Mais detalhes</button>
  </AboutDish>
);

export default Dish;
