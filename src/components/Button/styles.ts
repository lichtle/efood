import styled from "styled-components";

import { cores } from "../../styles";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${cores.buttonKnowMore};
  padding: 4px 6px;
  width: 82;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${cores.buttonAddBuy};
  border: none;
`;
