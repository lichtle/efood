import styled from "styled-components";

import { About } from "../Restaurant/styles";
import { colors } from "../../styles";

type Props = {
  width?: string;
};

export const AboutDish = styled(About)`
  background-color: ${colors.buttonKnowMore};
  color: ${colors.buttonAddBuy};
  gap: 8px;
  font-size: 14px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  > h3 {
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-weight: 400;
  }
`;

export const Button = styled.button<Props>`
  height: 24px;
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${colors.buttonAddBuy};
  color: ${colors.buttonKnowMore};
  font-size: 14px;
  font-weight: 700;
  border: none;
  padding: 4px 0;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &.visivel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  background-color: ${colors.buttonKnowMore};
  padding: 32px;
  position: relative;
  z-index: 1;

  .close-button {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  h3,
  p,
  span {
    color: #fff;
  }

  > h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p,
  span {
    font-size: 14px;
  }

  > img {
    width: 100%;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  gap: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
