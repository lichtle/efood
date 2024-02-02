import { useState } from "react";

import {
  AboutDish,
  Button,
  Modal,
  ModalContent,
  InfosContainer,
} from "./styles";

import { MenuItem } from "../Restaurant";

import { formataPreco } from "../../utils/formataPreco";

import fechar from "../../assets/close.png";

const Dish = ({ nome, descricao, foto, porcao, preco }: MenuItem) => {
  type ModalType = {
    isVisible: boolean;
    name: string;
    description: string;
    photo: string;
    serves: string;
    price: number;
  };

  const [modal, setModal] = useState<ModalType>({
    isVisible: false,
    name: "",
    description: "",
    photo: "",
    serves: "",
    price: 0,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
      name: "",
      description: "",
      photo: "",
      serves: "",
      price: 0,
    });
  };

  return (
    <>
      <AboutDish>
        <img src={foto} />
        <h4>{nome}</h4>
        <p>{descricao}</p>
        <Button
          onClick={() => {
            setModal({
              isVisible: true,
              name: `${nome}`,
              description: `${descricao}`,
              photo: `${foto}`,
              serves: `${porcao}`,
              price: parseFloat(`${preco}`),
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
            <img src={modal.photo} />
            <div>
              <h4>{modal.name}</h4>
              <p>{modal.description}</p>
              <span>Serve: de {modal.serves}</span>
              <Button width>
                Adicionar ao carrinho: {formataPreco(modal.price)}
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
