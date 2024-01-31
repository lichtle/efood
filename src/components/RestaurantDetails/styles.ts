import styled from "styled-components";

import fundo from "../../assets/header.png";
import italian from "../../assets/italian.png";

import { cores } from "../../styles";

import { List } from "../RestaurantsList/styles";

export const BackgroundContainer = styled.div`
  background-image: url("${fundo}");
  height: 320px;
  padding: 40px;
  color: ${cores.buttonKnowMore};
  height: 163px;

  .container {
    display: flex;
    align-items: center;

    h1,
    span {
      font-size: 18px;
      font-weight: 900;
    }

    h1 {
      margin-right: 341px;
    }

    span {
      margin-left: 193px;
    }
  }
`;

export const DetailsContainer = styled.div`
  background-image: url("${italian}");
  background-size: cover;
  height: 280px;

  .container {
    position: relative;

    h3,
    span {
      position: absolute;
      left: 0;
      color: #fff;
      font-size: 32px;
    }

    h3 {
      font-weight: 100;
      top: 25px;
    }

    span {
      font-weight: 900;
      top: 214px;
    }
  }
`;

export const DishesList = styled(List)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0 120px;
`;
