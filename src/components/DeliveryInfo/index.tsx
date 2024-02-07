import { SectionTitle, Input, InputGroup, ButtonGroup } from "./styles";

export type Props = {
  children: JSX.Element
};

const DeliveryInfo = ({ children }: Props) => (
  <section>
    <SectionTitle>Entrega</SectionTitle>
    <form>
      <Input>
        <label htmlFor="receiver">Quem irá receber</label>
        <input type="text" id="receiver" />
      </Input>
      <Input>
        <label htmlFor="description">Endereço</label>
        <input type="text" id="description" />
      </Input>
      <Input>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" />
      </Input>
      <InputGroup>
        <Input>
          <label htmlFor="zipCode">CEP</label>
          <input type="text" id="zipCode" />
        </Input>
        <Input>
          <label htmlFor="number">Número</label>
          <input type="number" id="number" />
        </Input>
      </InputGroup>
      <Input></Input>
      <Input>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" id="complement" />
      </Input>
    </form>
    <ButtonGroup>{children}</ButtonGroup>
  </section>
);

export default DeliveryInfo;
