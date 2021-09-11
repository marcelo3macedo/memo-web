import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #333333;
        --secondary100: #21b3af;
        --secondary90: #5ee4e1;
        --secondary80: #b6dddc;
        --secondary60: #d4f0f0;
        --secondary30: #eefbfb;
        --secondary10: #f7ffff;

        --neutral100: #333333;
        --neutral90: #646f71;
        --neutral80: #8a9a9c;
        --neutral60: #c1c2c5;
        --neutral50: #dfe0e2;
        --neutral30: #f9f9f9;
        --neutral10: #f7ffff;

        --warm01: #fee1e8;
        --purple: #cbaacb;

        --textSecondary100: #f7ffff;
        
        --alert: #f7603e;

        --alphaColor: 51, 51, 51;
        --alpha: 0.3;
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

    input {
        background: transparent;
    }

    .no-select {
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.2);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--neutral100);
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        ::-webkit-scrollbar {
            display: none;
        }

        h1 {
            font-size: 1.5em;
        }

        h2 {
            font-size: 1.3em;
        }
    }
`;