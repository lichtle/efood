export const getDescricao = (descricao: string | undefined, size: number) => {
  if (descricao) {
    if (descricao.length > size) {
      return descricao.slice(0, size) + "...";
    }
    return descricao;
  }
  return "Este restaurante não possui descrição.";
};
