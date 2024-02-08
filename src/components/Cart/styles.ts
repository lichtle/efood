import styled from "styled-components";

import { cores } from "../../styles";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const Sidebar = styled.aside`
  background-color: ${cores.buttonKnowMore};
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px;
  z-index: 1;
  overflow-y: scroll;

  p {
    text-align: left;
    color: ${cores.buttonAddBuy};
    margin-bottom: 24px;
  }
`;

export const Product = styled.li`
  background-color: ${cores.buttonAddBuy};
  color: ${cores.buttonKnowMore};
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  position: relative;

  div {
    margin: 8px 0 0 8px;

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const RemoveButton = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  margin: 40px 0 16px;
  color: ${cores.buttonAddBuy};
  font-weight: 700;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// Delivery Form

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${cores.background};
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.background};
  }

  input {
    height: 32px;
    margin-bottom: 8px;
    border: none;

    &.error {
      border: 1px solid red;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  #code {
    width: 87px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
