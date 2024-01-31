import { List } from "./styles";
import Product from "../Product";

const ProductsList = () => (
  <>
    <List className="container">
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
    </List>
  </>
);

export default ProductsList;
