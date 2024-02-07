import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { capitalizeFirstLetter } from "../../utils";

import { ListOfDishes } from "./styles";

import { MenuItem, RestaurantType } from "../../components/Restaurant";

import DishesHeader from "../../components/DishesHeader";
import Banner from "../../components/Banner";
import Dish from "../../components/Dish";

const RestaurantDetails = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [banner, setBanner] = useState<RestaurantType | null>(null); // Significa que inicialmente a variável de estado (nesse caso, banner) pode ser do tipo RestaurantType ou null. Isso é útil ao lidar com operações assíncronas, como a busca de dados. Inicialmente, antes que os dados sejam buscados, o estado pode ser null e, uma vez que os dados estejam disponíveis, ele será do tipo RestaurantType

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.cardapio);
        setBanner(data);
      });
  }, [id]);

  if (!menu && !banner) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <DishesHeader />
      {banner && (
        <Banner
          tipo={capitalizeFirstLetter(banner.tipo)}
          titulo={banner.titulo}
          capa={banner.capa}
        />
      )}
      <div className="container">
        <ListOfDishes>
          {menu.map((item) => (
            <li key={item.id}>
              <Dish dish={item} />
            </li>
          ))}
        </ListOfDishes>
      </div>
    </>
  );
};

export default RestaurantDetails;
