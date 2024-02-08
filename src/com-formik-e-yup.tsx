import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { RootReducer } from "../../store";
import { close, remove, clear } from "../../store/reducers/cart";

import { usePurchaseMutation } from "../../services/api";

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
  // Envio de informações (POST)

  const [purchase, { isLoading, isSuccess, isError, data }] =
    usePurchaseMutation();

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

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: 1,
      complement: "",
      name: "",
      cardNumber: "",
      code: 1,
      month: 1,
      year: 1,
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, "Este campo precisa ter no mínimo 5 caracteres")
        .required("Este campo é obrigatório"),
      description: Yup.string()
        .min(5, "Este campo precisa ter no mínimo 5 caracteres")
        .required("Este campo é obrigatório"),
      city: Yup.string()
        .min(3, "Este campo precisa ter no mínimo 3 caracteres")
        .required("Este campo é obrigatório"),
      zipCode: Yup.string()
        .min(8, "Este campo precisa ter 8 caracteres")
        .max(8, "Este campo precisa ter no máximo 8 caracteres")
        .required("Este campo é obrigatório"),
      number: Yup.number()
        .min(1, "Este campo precisa ter no mínimo um número")
        .required("Este campo é obrigatório"),
      complement: Yup.string().optional(),
      name: Yup.string()
        .min(5, "Este campo precisa ter no mínimo 5 caracteres")
        .required("Este campo é obrigatório"),
      cardNumber: Yup.string()
        .min(16, "Este campo precisa ter 16 caracteres")
        .max(16, "Este campo precisa ter no máximo 16 caracteres")
        .required("Este campo é obrigatório"),
      code: Yup.number()
        .min(3, "Este campo precisa ter 3 caracteres")
        .max(3, "Este campo precisa ter no máximo 3 caracteres")
        .required("Este campo é obrigatório"),
      month: Yup.number()
        .min(2, "Este campo precisa ter 2 caracteres")
        .max(2, "Este campo precisa ter no máximo 2 caracteres")
        .required("Este campo é obrigatório"),
      year: Yup.number()
        .min(4, "Este campo precisa ter 4 caracteres")
        .max(4, "Este campo precisa ter no máximo 4 caracteres")
        .required("Este campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10,
          },
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: values.code,
            expires: {
              month: values.month,
              year: values.year,
            },
          },
        },
      });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
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

        <form onSubmit={form.handleSubmit}>
          {deliveryInfo && (
            <section>
              <SectionTitle>Entrega</SectionTitle>
              <div>
                <Input>
                  <label htmlFor="receiver">
                    Quem irá receber (nome completo)
                  </label>
                  <input
                    type="text"
                    id="receiver"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("receiver") ? "error" : ""}
                  />
                </Input>
                <Input>
                  <label htmlFor="description">Endereço</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("description") ? "error" : ""}
                  />
                </Input>
                <Input>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </Input>
                <InputGroup>
                  <Input>
                    <label htmlFor="zipCode">CEP</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("zipCode") ? "error" : ""}
                    />
                  </Input>
                  <Input>
                    <label htmlFor="number">Número</label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("number") ? "error" : ""}
                    />
                  </Input>
                </InputGroup>
                <Input>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
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
              <SectionTitle>Pagamento - Valor a pagar 5555</SectionTitle>
              <div>
                <Input>
                  <label htmlFor="name">Nome no cartão</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("name") ? "error" : ""}
                  />
                </Input>
                <InputGroup>
                  <Input>
                    <label htmlFor="cardNumber">Número</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardNumber") ? "error" : ""
                      }
                    />
                  </Input>
                  <Input>
                    <label htmlFor="code">CVV</label>
                    <input
                      type="number"
                      id="code"
                      name="code"
                      value={form.values.code}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("code") ? "error" : ""}
                    />
                  </Input>
                </InputGroup>
                <InputGroup>
                  <Input>
                    <label htmlFor="month">Mês de vencimento</label>
                    <input
                      type="number"
                      id="month"
                      name="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("month") ? "error" : ""}
                    />
                  </Input>
                  <Input>
                    <label htmlFor="year">Ano de vencimento</label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("year") ? "error" : ""}
                    />
                  </Input>
                </InputGroup>
                <ButtonGroup>
                  <Button type="button" onClick={() => form.handleSubmit}>
                    Finalizar pagamento
                  </Button>
                  {/* onClick={showSuccessMessage} */}
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
            <SectionTitle>Pedido realizado - {data.orderId}</SectionTitle>
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
