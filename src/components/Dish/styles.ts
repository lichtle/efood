import styled from "styled-components";

import { About } from "../Restaurant/styles";
import { cores } from "../../styles";

export const AboutDish = styled(About)`
  background-color: ${cores.buttonKnowMore};
  color: ${cores.buttonAddBuy};
  gap: 8px;
  font-size: 14px;

  h4 {
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-weight: 400;
  }

  button {
    background-color: ${cores.buttonAddBuy};
    color: ${cores.buttonKnowMore};
    font-weight: 700;
    width: 100%;
    border: none;
    padding: 4px 0;
  }
`;
