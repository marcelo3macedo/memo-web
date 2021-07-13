import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #33333;
        --secondary100: #21b3af;
        --secondary80: #b6dddc;
        --secondary60: #d4f0f0;
        --secondary10: #f7ffff;

        --neutral100: #333333;
        --neutral60: #c1c2c5;

        --textSecondary100: #f7ffff;
    }

    * {
        margin: 0;
        padding: 0; 
        font-family: 'Montserrat', sans-serif;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;