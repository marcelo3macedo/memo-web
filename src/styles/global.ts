import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #333333;
        --secondary100: #21b3af;
        --secondary80: #b6dddc;
        --secondary60: #d4f0f0;
        --secondary10: #f7ffff;

        --neutral100: #333333;
        --neutral80: #8a9a9c;
        --neutral60: #c1c2c5;
        --neutral30: #f9f9f9;

        --textSecondary100: #f7ffff;
        
        --alert: #f7603e;
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

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.6);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--neutral100);
        border-radius: 5px;
    }
`;