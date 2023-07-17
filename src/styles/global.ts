import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --opacity: 0.8;
        --active: 0.6;
    }

    * {
        margin: 0;
        padding: 0; 
        font-family: 'League Spartan', sans-serif;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    input {;
        border: none;
        padding: 10px
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
        background-color: #333;
        border-radius: 1px;
    }
`;
