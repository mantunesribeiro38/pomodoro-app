import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: rgb(219, 82, 77);
        min-height: 356px;
        width: 100%;
        color: white;
        padding-bottom: 12px;
        overflow: hidden;
    }
`;

export default GlobalStyles;