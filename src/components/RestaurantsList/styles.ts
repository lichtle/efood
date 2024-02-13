import styled from "styled-components";

import { breakpoints } from "../../styles";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
  padding: 40px 0 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    padding: 32px;
  }
`;
