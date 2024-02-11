import { useSelector, useDispatch } from "react-redux";

import { RootReducer } from "../../store";
import { closeCart, removeItem } from "../../store/reducers/cart";
import { openCheckout } from "../../store/reducers/checkout";

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

import CheckoutForm from "../Checkout";

export const Cart = () => {
  // Interações (remoção de itens e fechamento do carrinho)
  const { isCartOpen, items } = useSelector((state: RootReducer) => state.cart);
  const { isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.checkout
  );

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeCart());
  };

  const remove = (id: number) => {
    dispatch(removeItem(id));
  };

  const openCheck = () => {
    dispatch(openCheckout());
  };

  // Conteúdo do componente
  return (
    <CartContainer className={isCartOpen ? "open-cart" : ""}>
      <Overlay onClick={close} />
      <Sidebar>
        {items.length >= 1 ? (
          <>
            <ul>
              {items.map((item, index) => (
                <Product key={index}>
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
              <Button onClick={openCheck}>Continuar a compra</Button>
            </div>
          </>
        ) : (
          <p className="empty-cart-warning">Seu carrinho está vazio</p>
        )}
        {isCheckoutOpen && <CheckoutForm />}
      </Sidebar>
    </CartContainer>
  );
};
