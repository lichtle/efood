import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem, openCart } from "../../store/reducers/cart";

import { MenuItem } from "../Restaurant";

import { formatPrice, getDescricao } from "../../utils";

import { Cart } from "../Cart";

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

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(dish));
    dispatch(openCart());
  };

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  return (
    <>
      <AboutDish>
        <img src={dish.foto} />
        <h3>{dish.nome}</h3>
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
              <h3>{dish.nome}</h3>
              <p>{dish.descricao}</p>
              <span>Serve: de {dish.porcao}</span>
              <Button
                width="218px"
                onClick={() => {
                  addToCart();
                }}
              >
                Adicionar ao carrinho: {formatPrice(dish.preco)}
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
      <Cart />
    </>
  );
};

export default Dish;
