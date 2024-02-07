import styled from "styled-components";

import { List } from "../../components/RestaurantsList/styles";

export const ListOfDishes = styled(List)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0 120px;
`;
