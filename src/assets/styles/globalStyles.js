import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --fontFamily: "Montserrat", sans-serif;
    --color__purple: #5837D0;
  }

  html {
    font-size: 112.5%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    font-size: 18px;
    line-height: 1.75;
    font-family: var(--fontFamily);
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    height: 100%;
    padding-bottom: 5rem;
  }

  button {
    border: 2px solid var(--color__purple);
    color: var(--color__purple);
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 6px;
    cursor: pointer;
    font-family: var(--fontFamily);
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--color__purple);
      color: #fff;
    }
  }

  ::-webkit-file-upload-button {
    background-color: #fff;
    color: var(--color__purple);
    padding: 1rem 2rem;
    border-radius: 6px;
    border: 2px solid var(--color__purple);
    margin-right: 20px;
    font-family: var(--fontFamily);
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: var(--color__purple);
      color: #fff;
    }
  }

  input[type="file"] {
    width: 500px;
    margin: 0 auto 1rem;
    background: #F9F8FC;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #F1EFF8;
    font-family: var(--fontFamily);
    cursor: pointer;
  }

  .sizes {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;

    svg {
      width: 21px;
      margin: 0 1rem;
    }

    .old {
      color: #E0144C;
    }

    .new {
      color: #4FA095;
    }
  }
`

export default GlobalStyle
