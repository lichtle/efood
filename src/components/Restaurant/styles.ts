import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "../../styles";

export const Card = styled.div`
  border: 1px solid ${colors.buttonKnowMore};
  position: relative;
  max-width: 472px;
  max-height: 398px;

  button {
    font-size: 14px;
  }

  img {
    max-height: 217px;
    width: 100%;
    object-fit: cover;
  }
`;

export const About = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.buttonKnowMore};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 8px;

  p {
    font-weight: 400;
    line-height: 22px;
  }
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
  color: ${colors.buttonAddBuy};
  background-color: ${colors.buttonKnowMore};
  padding: 4px 6px;
`;
