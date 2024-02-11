import styled from "styled-components";

import fundo from "../../assets/header.png";
import { colors } from "../../styles";

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
`;
