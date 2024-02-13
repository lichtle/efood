import styled from "styled-components";

import fundo from "../../assets/header.png";

import { breakpoints, colors } from "../../styles";

export const BackgroundContainer = styled.div`
  background-image: url("${fundo}");
  height: 320px;
  padding: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 136px;

    h1 {
      color: ${colors.buttonKnowMore};
      font-size: 36px;
      font-weight: 900;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;

    .container {
      gap: 16px;

      img {
        max-width: 100px;
      }

      h1 {
        font-size: 18px;
        text-align: center;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 170px;

    .container {
      h1 {
        font-size: 22px;
      }
    }
  }
`;
