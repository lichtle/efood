import { List } from "./styles";
import Restaurant from "../Restaurant";

const RestaurantsList = () => (
  <>
    <List className="container">
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
    </List>
  </>
);

export default RestaurantsList;
