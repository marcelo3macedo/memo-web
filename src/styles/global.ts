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

    input:disabled {
        pointer-events:none;
        opacity: 0.8;
        -webkit-touch-callout: none;
          -webkit-user-select: none;
           -khtml-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
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

    h1 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H1};
    }

    h2 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H2};
    }

    h3 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H3};
    }

    h4 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H4};
    }

    h5 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H5};
    }

    h6 {
        font-size: ${({ theme }: any) => theme.FONT_SIZE_H6};
    }

    @media (max-width: 768px) {
        h1 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H1_MOB};
        }
    
        h2 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H2_MOB};
        }
    
        h3 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H3_MOB};
        }
    
        h4 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H4_MOB};
        }
    
        h5 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H5_MOB};
        }
    
        h6 {
            font-size: ${({ theme }: any) => theme.FONT_SIZE_H6_MOB};
        }
    }
`;
