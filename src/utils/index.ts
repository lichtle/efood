import { MenuItem } from "../components/Restaurant";

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.substring(1);

export const getDescricao = (descricao: string | undefined, size: number) => {
  if (descricao) {
    if (descricao.length > size) {
      return descricao.slice(0, size) + "...";
    }
    return descricao;
  }
  return "Este restaurante não possui descrição.";
};

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

export const getTotalPrice = (amount: MenuItem[]) => {
  return amount.reduce((acc, currentAmount) => {
    return (acc += currentAmount.preco!);
  }, 0);
};