import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { RootReducer } from "../../store";
import { close, remove, clear } from "../../store/reducers/cart";

import DeliveryInfo from "../DeliveryInfo";
import PaymentInfo from "../PaymentInfo";
import SuccessMessage from "../SuccessMessage";

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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const [cart, setCart] = useState(true);
  const [deliveryInfo, setDeliveryInfo] = useState(false);
  const [payment, setPayment] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const goToDeliveryInfo = () => {
    setCart(false);
    setDeliveryInfo(true);
  };

  const goBackToCart = () => {
    setCart(true);
    setDeliveryInfo(false);
  };

  const goToPayment = () => {
    setDeliveryInfo(false);
    setPayment(true);
  };

  const goBackToDeliveryInfo = () => {
    setDeliveryInfo(true);
    setPayment(false);
  };

  const showSuccessMessage = () => {
    setSuccessMessage(true);
    setPayment(false);
  };

  const cleanCart = () => {
    dispatch(clear());
    dispatch(close());
    setSuccessMessage(false);
    setCart(true);
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cart && (
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
                    <span>{formatPrice(getTotalPrice(items))}</span>
                  </p>
                </TotalPrice>
                <Button onClick={goToDeliveryInfo}>Continuar a compra</Button>
              </div>
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </ul>
        )}

        {deliveryInfo && (
          <DeliveryInfo
            children={
              <>
                <Button onClick={goToPayment}>Continuar com o pagamento</Button>
                <Button onClick={goBackToCart}>Voltar para o carrinho</Button>
              </>
            }
          />
        )}

        {payment && (
          <PaymentInfo
            totalAmount={"1"}
            children={
              <>
                <Button onClick={showSuccessMessage}>
                  Finalizar pagamento
                </Button>
                <Button onClick={goBackToDeliveryInfo}>
                  Voltar para a edição de endereço
                </Button>
              </>
            }
          />
        )}

        {successMessage && (
          <SuccessMessage onClick={cleanCart} orderId={"PORRA"} />
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
