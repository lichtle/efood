import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";

import { close, remove } from "../../store/reducers/cart";

import { formatPrice } from "../../utils/formatPrice";

import {
  CartContainer,
  Overlay,
  Sidebar,
  Product,
  ProductImage,
  RemoveButton,
  TotalPrice,
} from "./styles";

import { Button } from "../Dish/styles";

import removeIcon from "../../assets/remove.png";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Product key={item.id}>
              <ProductImage src={item.foto} />
              <div>
                <h4>{item.nome}</h4>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <RemoveButton
                src={removeIcon}
                alt="Remover item"
                onClick={() => {
                  removeItem(item.id);
                }}
              />
            </Product>
          ))}
          {items.length >= 1 ? (
            <div>
              <TotalPrice>
                <p>
                  Valor total
                  <span>{formatPrice(getTotalPrice())}</span>
                </p>
              </TotalPrice>
              <Button>Continuar a compra</Button>
            </div>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </ul>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
