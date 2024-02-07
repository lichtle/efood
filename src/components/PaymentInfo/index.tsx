import {
  SectionTitle,
  Input,
  InputGroup,
  ButtonGroup,
} from "../DeliveryInfo/styles";

export type Props = {
  children: JSX.Element;
  totalAmount: string;
};

const PaymentInfo = ({ children, totalAmount }: Props) => (
  <section>
    <SectionTitle>Pagamento - Valor a pagar {totalAmount}</SectionTitle>
    <form>
      <Input>
        <label htmlFor="name">Nome no cartão</label>
        <input type="text" id="name" />
      </Input>
      <InputGroup>
        <Input>
          <label htmlFor="number">Número</label>
          <input type="text" id="number" className="cardNumber"/>
        </Input>
        <Input>
          <label htmlFor="code">CVV</label>
          <input type="number" id="code" />
        </Input>
      </InputGroup>
      <InputGroup>
        <Input>
          <label htmlFor="month">Mês de vencimento</label>
          <input type="text" id="month" />
        </Input>
        <Input>
          <label htmlFor="year">Ano de vencimento</label>
          <input type="number" id="year" />
        </Input>
      </InputGroup>
    </form>
    <ButtonGroup>{children}</ButtonGroup>
  </section>
);

export default PaymentInfo;
