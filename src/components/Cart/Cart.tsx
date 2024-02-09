import { useSelector, useDispatch } from "react-redux";

import { RootReducer } from "../../store";
import { closeCart, removeItem } from "../../store/reducers/cart";
import { showCheckout } from "../../store/reducers/checkout";

import { getTotalPrice, formatPrice } from "../../utils";

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

export const Cart = () => {
  // Interações (remoção de itens e fechamento do carrinho)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeCart());
  };

  const remove = (id: number) => {
    dispatch(removeItem(id));
  };

  const openCheckout = () => {
    dispatch(showCheckout());
    // dispatch(closeCart());
  };

  // Conteúdo do componente

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={close} />
      <Sidebar>
        {items.length >= 1 ? (
          <>
            <ul>
              {items.map((item) => (
                <Product key={item.id}>
                  <ProductImage src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <RemoveButton
                    src={removeIcon}
                    alt="Remover item"
                    onClick={() => {
                      remove(item.id);
                    }}
                  />
                </Product>
              ))}
            </ul>
            <div>
              <TotalPrice>
                <p>
                  Valor total
                  <span>{formatPrice(getTotalPrice(items))}</span>
                </p>
              </TotalPrice>
              <Button onClick={openCheckout}>Continuar a compra</Button>
            </div>
          </>
        ) : (
          <p>Seu carrinho está vazio</p>
        )}
      </Sidebar>
    </CartContainer>
  );
};
