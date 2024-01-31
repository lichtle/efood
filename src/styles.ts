import { createGlobalStyle } from "styled-components";

export const cores = {
  background: "#FFF8F2",
  buttonKnowMore: "#E66767",
  buttonAddBuy: "#FFEBD9",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${cores.background};
  }
`;
