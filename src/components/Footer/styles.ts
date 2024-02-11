import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.div`
  background-color: ${colors.buttonAddBuy};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      padding: 40px 0 32.5px;
    }

    p {
      text-align: center;
      color: ${colors.buttonKnowMore};
      padding: 80px 0 40px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;
