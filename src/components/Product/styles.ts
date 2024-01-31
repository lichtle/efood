import styled from "styled-components";

import { Link } from "react-router-dom";

import { cores } from "../../styles";

export const Card = styled.div`
  border: 1px solid ${cores.buttonKnowMore};
  position: relative;

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
`;

export const About = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.buttonKnowMore};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 8px;
`;

export const NameRate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2,
  span {
    font-size: 18px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: auto;
`;

export const Button = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${cores.buttonAddBuy};
  background-color: ${cores.buttonKnowMore};
  padding: 4px 6px;
`;
