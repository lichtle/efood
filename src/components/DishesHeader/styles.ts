import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

import fundo from "../../assets/header.png";

export const BackgroundContainer = styled.div`
  background-image: url("${fundo}");
  height: 320px;
  padding: 40px;
  color: ${colors.buttonKnowMore};
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
      user-select: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
    padding: 32px;

    .container {
      flex-direction: column;
      gap: 16px;

      img {
        max-width: 100px;
      }

      h1 {
        margin-right: 0;
      }

      span {
        margin-left: 0;
      }
    }
  }
`;
