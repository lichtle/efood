import { useState, useEffect } from "react";
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

import InputMask from "react-input-mask";

const CheckoutForm = () => {
  const [payment, setPayment] = useState(false);

  const [purchase, { data, isSuccess }] = usePurchaseMutation();

  const { isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.checkout
  );

  const { items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart());
    }
  }, [isSuccess, dispatch]);

  const goBackToCart = () => {
    dispatch(closeCheckout());
    dispatch(openCart());
  };

  const closeCheck = () => {
    dispatch(closeCheckout());
    setPayment(false);
  };

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      name: "",
      cardNumber: "",
      code: "",
      month: "",
      year: "",
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
        .min(8, "Precisa ter 8 caracteres")
        .max(9, "Este campo precisa ter no máximo 9 caracteres")
        .required("Este campo é obrigatório"),

      number: Yup.string()
        .min(1, "Precisa ter um número")
        .required("Este campo é obrigatório"),

      complement: Yup.string(),

      name: Yup.string()
        .min(5, "Este campo precisa ter no mínimo 5 caracteres")
        .required("Este campo é obrigatório"),

      cardNumber: Yup.string()
        .min(16, "Este campo precisa ter 16 caracteres")
        .max(19, "Este campo precisa ter no máximo 19 caracteres")
        .required("Este campo é obrigatório"),

      code: Yup.string()
        .min(3, "Este campo precisa ter 3 caracteres")
        .max(3, "Este campo precisa ter no máximo 3 caracteres")
        .required("Este campo é obrigatório"),

      month: Yup.number()
        .min(1, "Insira um número de 01 à 12")
        .max(12, "O mês precisa estar entre 01 e 12")
        .required("Este campo é obrigatório"),

      year: Yup.number()
        .min(
          new Date().getFullYear(),
          "O ano deve ser igual ou maior que o ano atual"
        )
        .required("Este campo é obrigatório"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    isInitialValid: false,

    onSubmit: (values) => {
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

  const checkInputHasError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    if (hasError) return message;
    return "";
  };

  const goToPayment = () => {
    // Se todas as infos do formulário de delivery estiverem manipuladas e corretas, abre a página de pagamento
    if (
      !form.errors.receiver &&
      form.touched.receiver &&
      !form.errors.description &&
      form.touched.description &&
      !form.errors.city &&
      form.touched.city &&
      !form.errors.zipCode &&
      form.touched.zipCode &&
      !form.errors.number &&
      form.touched.number
    ) {
      setPayment(true);
    }
  };

  return (
    <CheckoutContainer className={isCheckoutOpen ? "open-checkout" : ""}>
      <Overlay onClick={closeCheck} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {!payment && !isSuccess && (
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
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("receiver") ? "error-border" : ""
                  }
                />
                <small className="error-message">
                  {checkInputHasError("receiver", form.errors.receiver)}
                </small>
              </Input>
              <Input>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("description") ? "error-border" : ""
                  }
                />
                <small className="error-message">
                  {checkInputHasError("description", form.errors.description)}
                </small>
              </Input>
              <Input>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("city") ? "error-border" : ""}
                />
                <small className="error-message">
                  {checkInputHasError("city", form.errors.city)}
                </small>
              </Input>
              <InputGroup>
                <Input>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99999-999"
                    className={
                      checkInputHasError("zipCode") ? "error-border" : ""
                    }
                  />
                  <small className="error-message">
                    {checkInputHasError("zipCode", form.errors.zipCode)}
                  </small>
                </Input>
                <Input>
                  <label htmlFor="number">Número</label>
                  <input
                    type="string"
                    id="number"
                    name="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("number") ? "error-border" : ""
                    }
                  />
                  <small className="error-message">
                    {checkInputHasError("number", form.errors.number)}
                  </small>
                </Input>
              </InputGroup>
              <Input>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </Input>
              <ButtonGroup>
                <Button type="submit" onClick={goToPayment}>
                  Continuar com o pagamento
                </Button>
                <Button type="button" onClick={goBackToCart}>
                  Voltar para o carrinho
                </Button>
              </ButtonGroup>
            </section>
          )}

          {payment && !isSuccess && (
            <section>
              <Title>
                Pagamento - Valor a pagar: {formatPrice(getTotalPrice(items))}
              </Title>
              <div>
                <Input>
                  <label htmlFor="name">Nome no cartão</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("name") ? "error-border" : ""}
                  />
                  <small className="error-message">
                    {checkInputHasError("name", form.errors.name)}
                  </small>
                </Input>
                <InputGroup>
                  <Input>
                    <label htmlFor="cardNumber">Número</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                      className={
                        checkInputHasError("cardNumber") ? "error-border" : ""
                      }
                    />
                    <small className="error-message">
                      {checkInputHasError("cardNumber", form.errors.cardNumber)}
                    </small>
                  </Input>
                  <Input>
                    <label htmlFor="code">CVV</label>
                    <InputMask
                      type="text"
                      id="code"
                      name="code"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                      className={
                        checkInputHasError("code") ? "error-border" : ""
                      }
                    />
                    <small className="error-message">
                      {checkInputHasError("code", form.errors.code)}
                    </small>
                  </Input>
                </InputGroup>
                <InputGroup>
                  <Input>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="month"
                      name="month"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      className={
                        checkInputHasError("month") ? "error-border" : ""
                      }
                    />
                    <small className="error-message">
                      {checkInputHasError(
                        "month",
                        "O mês precisa estar entre 01 e 12"
                      )}
                    </small>
                  </Input>
                  <Input>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="year"
                      name="year"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999"
                      className={
                        checkInputHasError("year") ? "error-border" : ""
                      }
                    />
                    <small className="error-message">
                      {checkInputHasError(
                        "year",
                        `Precisa ter 4 caracteres e ser maior ou igual à ${new Date().getFullYear()}`
                      )}
                    </small>
                  </Input>
                </InputGroup>
                <ButtonGroup>
                  <Button type="submit">Finalizar pagamento</Button>
                  <Button onClick={() => setPayment(false)}>
                    Voltar para a edição de endereço
                  </Button>
                </ButtonGroup>
              </div>
            </section>
          )}
        </form>

        {isSuccess && payment && data && (
          <>
            <Title>Pedido realizado - {data?.orderId}</Title>
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
            <Button onClick={() => location.reload()}>Concluir</Button>
          </>
        )}
      </Sidebar>
    </CheckoutContainer>
  );
};

export default CheckoutForm;
