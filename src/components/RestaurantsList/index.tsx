import { useState, useEffect } from "react";

import { List } from "./styles";
import Restaurant, { RestaurantType } from "../Restaurant";

const RestaurantsList = () => {
  const [restaurantsList, setRestaurantsList] = useState<RestaurantType[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((answer) => answer.json())
      .then((answer) => setRestaurantsList(answer)); //
  }, []);

  return (
    <>
      <List className="container">
        {restaurantsList.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <Restaurant
                id={restaurant.id}
                titulo={restaurant.titulo}
                destacado={restaurant.destacado}
                tipo={restaurant.tipo}
                avaliacao={restaurant.avaliacao}
                descricao={restaurant.descricao}
                capa={restaurant.capa}
              />
            </li>
          );
        })}
      </List>
    </>
  );
};

export default RestaurantsList;
