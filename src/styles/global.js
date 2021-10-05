import { createGlobalStyle } from "styled-components"
import theme from "./theme"


export const GlobalStyle = createGlobalStyle`
h1 {
    font-family: 'Bembo';
    font-weight: normal;
    font-size: 40px;
    margin-top: 4px;
    margin-bottom: 16px;
}

p, span, label {
    color: ${theme.colors.grey[2]};
    font-size: 12px;
}


`