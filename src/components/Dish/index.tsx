import { useState } from "react";

import { MenuItem } from "../Restaurant";

import { formataPreco } from "../../utils/formataPreco";
import { getDescricao } from "../../utils/getDescricao";

import {
  AboutDish,
  Button,
  Modal,
  ModalContent,
  InfosContainer,
} from "./styles";

import fechar from "../../assets/close.png";

type Props = {
  dish: MenuItem;
};

const Dish = ({ dish }: Props) => {
  type ModalType = {
    isVisible: boolean;
  };

  const [modal, setModal] = useState<ModalType>({
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  return (
    <>
      <AboutDish>
        <img src={dish.foto} />
        <h4>{dish.nome}</h4>
        <p>{getDescricao(dish.descricao, 200)}</p>
        <Button
          onClick={() => {
            setModal({
              isVisible: true,
            });
          }}
        >
          Mais detalhes
        </Button>
      </AboutDish>

      <Modal className={modal.isVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <InfosContainer>
            <img
              className="close-button"
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal();
              }}
            />
            <img src={dish.foto} />
            <div>
              <h4>{dish.nome}</h4>
              <p>{dish.descricao}</p>
              <span>Serve: de {dish.porcao}</span>
              <Button width>
                Adicionar ao carrinho: {formataPreco(dish.preco)}
              </Button>
            </div>
          </InfosContainer>
        </ModalContent>
        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  );
};

export default Dish;
