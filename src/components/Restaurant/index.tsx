import { Card, Tags, About, NameRate, Rating, Button } from "./styles";

import { capitalizeFirstLetter, getDescricao } from "../../utils";

import Tag from "../Tag";

import star from "../../assets/star.png";

export type MenuItem = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
};

export type RestaurantType = {
  id?: number;
  titulo: string;
  destacado?: boolean;
  tipo: string;
  avaliacao?: number;
  descricao?: string;
  capa: string;
  cardapio?: MenuItem[];
};

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: RestaurantType) => {
  return (
    <Card>
      <Tags>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{capitalizeFirstLetter(tipo)}</Tag>
      </Tags>
      <img src={capa} />
      <About>
        <NameRate>
          <h2>{titulo}</h2>
          <Rating>
            <span>{avaliacao}</span>
            <span>
              <img src={star} />
            </span>
          </Rating>
        </NameRate>
        <p>{getDescricao(descricao, 195)}</p>
        <Button to={`restaurantes/${id}`}>Saiba mais</Button>
      </About>
    </Card>
  );
};

export default Restaurant;
