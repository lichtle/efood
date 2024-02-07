import { SectionTitle } from "../DeliveryInfo/styles";
import { Button } from "../Dish/styles";

export type Props = {
  onClick: () => void;
  orderId: string;
};

const SuccessMessage = ({ onClick, orderId }: Props) => (
  <section>
    <SectionTitle>Pedido realizado - {orderId}</SectionTitle>
    <div>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
    </div>
    <Button onClick={onClick}>Concluir</Button>
  </section>
);

export default SuccessMessage;
