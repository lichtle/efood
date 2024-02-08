import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { RootReducer } from "../../store";
import { close, remove, clear } from "../../store/reducers/cart";

import { getTotalPrice, formatPrice } from "../../utils";

import {
  CartContainer,
  Overlay,
  Sidebar,
  Product,
  ProductImage,
  RemoveButton,
  TotalPrice,
  SectionTitle,
  Input,
  InputGroup,
  ButtonGroup,
} from "./styles";
import { Button } from "../Dish/styles";

import removeIcon from "../../assets/remove.png";

export const Cart = () => {
  // Interações (remoção de itens e fechamento do carrinho)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  // Renderizações condicionais

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

  const clearCart = () => {
    dispatch(clear());
    dispatch(close());
    setSuccessMessage(false);
    setCart(true);
  };

  // Conteúdo do componente

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

        <form>
          {deliveryInfo && (
            <section>
              <SectionTitle>Entrega</SectionTitle>
              <div>
                <Input>
                  <label htmlFor="receiver">
                    Quem irá receber (nome completo)
                  </label>
                  <input type="text" id="receiver" name="receiver" />
                </Input>
                <Input>
                  <label htmlFor="description">Endereço</label>
                  <input type="text" id="description" name="description" />
                </Input>
                <Input>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" name="city" />
                </Input>
                <InputGroup>
                  <Input>
                    <label htmlFor="zipCode">CEP</label>
                    <input type="text" id="zipCode" name="zipCode" />
                  </Input>
                  <Input>
                    <label htmlFor="number">Número</label>
                    <input type="number" id="number" name="number" />
                  </Input>
                </InputGroup>
                <Input>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input type="text" id="complement" name="complement" />
                </Input>
                <ButtonGroup>
                  <Button onClick={goToPayment}>
                    Continuar com o pagamento
                  </Button>
                  <Button onClick={goBackToCart}>Voltar para o carrinho</Button>
                </ButtonGroup>
              </div>
            </section>
          )}

          {payment && (
            <section>
              <SectionTitle>
                Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
              </SectionTitle>
              <div>
                <Input>
                  <label htmlFor="name">Nome no cartão</label>
                  <input type="text" id="name" name="name" />
                </Input>
                <InputGroup>
                  <Input>
                    <label htmlFor="cardNumber">Número</label>
                    <input type="text" id="cardNumber" name="cardNumber" />
                  </Input>
                  <Input>
                    <label htmlFor="code">CVV</label>
                    <input type="number" id="code" name="code" />
                  </Input>
                </InputGroup>
                <InputGroup>
                  <Input>
                    <label htmlFor="month">Mês de vencimento</label>
                    <input type="number" id="month" name="month" />
                  </Input>
                  <Input>
                    <label htmlFor="year">Ano de vencimento</label>
                    <input type="number" id="year" name="year" />
                  </Input>
                </InputGroup>
                <ButtonGroup>
                  <Button type="submit" onClick={showSuccessMessage}>
                    Finalizar pagamento
                  </Button>
                  <Button onClick={goBackToDeliveryInfo}>
                    Voltar para a edição de endereço
                  </Button>
                </ButtonGroup>
              </div>
            </section>
          )}
        </form>

        {successMessage && (
          <div>
            <SectionTitle>Pedido realizado - orderId</SectionTitle>
            <div>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </div>
            <Button onClick={clearCart}>Concluir</Button>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  );
};
