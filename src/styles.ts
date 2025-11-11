import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-principal-hover: #915f6b;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    background-color: var(--cor-secundaria);
    color: #333;
    padding-bottom: 120px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  button {
    font-family: inherit;
    border: none;
  }

  input {
    font-family: inherit;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 90%;
    }
  }
`

export default GlobalStyle
