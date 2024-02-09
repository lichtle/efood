import styled from "styled-components";

import { cores } from "../../styles";

export const Title = styled.h2`
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
