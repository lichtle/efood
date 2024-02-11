import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";

import { RootReducer } from "../../store";
import { clearCart, openCart } from "../../store/reducers/cart";
import { closeCheckout } from "../../store/reducers/checkout";

import { formatPrice, getTotalPrice } from "../../utils";
import { usePurchaseMutation } from "../../services/api";

import {
  CheckoutContainer,
  Overlay,
  Sidebar,
  Title,
  Input,
  InputGroup,
  ButtonGroup,
} from "./styles";
import { Button } from "../Dish/styles";

const CheckoutForm = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(true);
  const [payment, setPayment] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const dispatch = useDispatch();

  const goBackToCart = () => {
    dispatch(closeCheckout());
    dispatch(openCart());
  };

  const goToPayment = () => {
    setPayment(true);
    setDeliveryInfo(false);
  };

  const goBackToDeliveryInfo = () => {
    setDeliveryInfo(true);
    setPayment(false);
  };

  const showSuccessMessage = () => {
    setSuccessMessage(true);
  };

  const closeSuccessMessage = () => {
    dispatch(closeCheckout()), dispatch(clearCart());
  };

  const closeCheck = () => {
    dispatch(closeCheckout());
  };

  const { isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.checkout
  );
  const { items } = useSelector((state: RootReducer) => state.cart);

  const [purchase, { data }] = usePurchaseMutation();

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: 0,
      complement: "",
      name: "",
      cardNumber: "",
      code: 0,
      month: 0,
      year: 0,
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

      complement: Yup.string(),

      name: Yup.string()
        .min(5, "Este campo precisa ter no mínimo 5 caracteres")
        .required("Este campo é obrigatório"),

      cardNumber: Yup.string()
        .min(16, "Este campo precisa ter 16 caracteres")
        .max(16, "Este campo precisa ter no máximo 16 caracteres")
        .required("Este campo é obrigatório"),

      code: Yup.string()
        .min(3, "Este campo precisa ter 3 caracteres")
        .max(3, "Este campo precisa ter no máximo 3 caracteres")
        .required("Este campo é obrigatório"),

      month: Yup.number()
        .min(1, "Este campo precisa ter no mínimo o número 1")
        .max(12, "Este campo precisa ter no máximo o número 12")
        .required("Este campo é obrigatório"),

      year: Yup.number()
        .min(
          new Date().getFullYear(),
          "O ano deve ser igual ou maior que o ano atual"
        )
        .required("Este campo é obrigatório"),
    }),
    onSubmit: (values) => {
      console.log(values);
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
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

  return (
    <CheckoutContainer className={isCheckoutOpen ? "open-checkout" : ""}>
      <Overlay onClick={closeCheck} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {deliveryInfo && (
            <section>
              <Title>Entrega</Title>
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
                <Button disabled={!form.isValid} onClick={goToPayment}>
                  Continuar com o pagamento
                </Button>
                <Button onClick={goBackToCart}>Voltar para o carrinho</Button>
              </ButtonGroup>
            </section>
          )}

          {payment && (
            <section>
              <Title>
                Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
              </Title>
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
                      type="text"
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
                  <Button
                    type="submit"
                    disabled={!form.isValid}
                    onClick={showSuccessMessage}
                  >
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
            <Title>Pedido realizado - {data!.orderId}</Title>
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
            <Button onClick={closeSuccessMessage}>Concluir</Button>
          </div>
        )}
      </Sidebar>
    </CheckoutContainer>
  );
};

export default CheckoutForm;
