import styled from "styled-components";

import { breakpoints } from "../../styles";

import { List } from "../../components/RestaurantsList/styles";

export const ListOfDishes = styled(List)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0 120px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 16px;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
  }
`;
