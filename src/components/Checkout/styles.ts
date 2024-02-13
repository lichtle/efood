import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.open-checkout {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const Sidebar = styled.aside`
  background-color: ${colors.buttonKnowMore};
  max-width: 360px;
  width: 360px;
  padding: 32px 8px;
  z-index: 1;

  p {
    text-align: left;
    color: ${colors.buttonAddBuy};
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 75%;
    padding: 16px 8px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.background};

  @media (max-width: ${breakpoints.tablet}) {
    line-height: 22px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.background};
  }

  input {
    height: 32px;
    margin-bottom: 8px;
    border: none;

    &.error-border {
      border: 3px solid red;
    }
  }

  .error-message {
    margin-bottom: 16px;
    color: yellow;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  #code {
    width: 87px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    flex-direction: row;

    #code {
      width: 100%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
