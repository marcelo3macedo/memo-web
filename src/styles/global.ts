import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #33333;
        --secondary100: #21b3af;
        --secondary80: #b6dddc;
        --secondary60: #d4f0f0;
        --secondary10: #f7ffff;

        --neutral100: #333333;
        --neutral80: #8a9a9c;
        --neutral60: #c1c2c5;
        --neutral30: #f9f9f9;

        --textSecondary100: #f7ffff;
    }

    * {
        margin: 0;
        padding: 0; 
        font-family: 'Montserrat', sans-serif;
    }

    h4, h5, h6 {
        font-weight: normal;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;