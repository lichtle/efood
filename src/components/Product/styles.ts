import styled from "styled-components";

import { cores } from "../../styles";

export const Card = styled.div`
  border: 1px solid ${cores.buttonKnowMore};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 8px;

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
`;
