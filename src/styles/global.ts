import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --pallete01: #e5ddc8;
        --pallete02: #01949a;
        --pallete03: #004369;
        --pallete04: #db1f48;

        --light: #fff;

        --primary: #4a4a4a;
        --secondaryDark: #01949a;
        --secondary100: #21b3af;
        --secondary90: #5ee4e1;
        --secondary80: #b6dddc;
        --secondary60: #d4f0f0;
        --secondary40: #e4fdfd;
        --secondary30: #eefbfb;
        --secondary20: #d4efef;
        --secondary15: #f7f7f7;
        --secondary10: #f7ffff;

        --neutral100: #4a4a4a;
        --neutral90: #4a4a4a;
        --neutral80: #8a9a9c;
        --neutral60: #c1c2c5;
        --neutral50: #dfe0e2;
        --neutral30: #f9f9f9;
        --neutral10: #f3f3f3;
        --neutral0: #fff;

        --cold100: #3179c3;

        --warm01: #fee1e8;
        --warm30: #e9859e;
        --warm50: #e794a9;
        --warm80: #ff63b1;
        --warm90: #cd4a8b;
        --warm100: #a3004a;
        --purple: #cbaacb;
        --green80: #6dc4be;
        --green90: #25bd24;
        --blue80: #28579f;

        --pastelGray: #f8f8f8;
        --pastelGreen: #c8f8ff;
        --pastelBlue: #1ae2ff;

        --textSecondary100: #f7ffff;
        
        --alert: #f7603e;

        --alphaColor: 51, 51, 51;
        --alpha: 0.3;
        --alphaStrong: 0.65;
        --opacity: 0.8;
        --maxWidth: 1200px;
    }

    * {
        margin: 0;
        padding: 0; 
        font-family: 'League Spartan', sans-serif;
    }

    h1 {
        font-size: 30pt;
    }

    h2 {
        font-size: 22pt;
    }

    h3 {
        font-size: 18pt;
        font-weight: normal;
    }

    h4 {
        font-size: 16pt;
    }

    h5 {
        font-size: 12pt;
    }

    h4, h5, h6 {
        font-weight: normal;
        color: var(--neutral90);
    }
    
    textarea:focus, input:focus{
        outline: none;
    }

    input {
        background: transparent;
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
        background-color: var(--neutral100);
        border-radius: 5px;
    }

    body {
        background: var(--pallete01);
        color: var(--neutral100);    
    }

    .fade-enter {
        opacity: 0.5;
        z-index: 1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 250ms ease-in;
    }

    input[type="checkbox"] {
        cursor: pointer;
        font-size: 22px;
        line-height: 24px;
        height: 24px;
        width: 24px;
        clear: both;
        padding: 0;
        margin: 0;
        margin-right: 10px;
    }

    input[type='radio'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--neutral80);
        border-radius: 50%;
    }

    input[type='radio']:checked {
        background: var(--secondary100);
        border: 2px solid var(--secondary90);
    }

    select {
        background: transparent;
        border: 1px solid var(--neutral80);
        border-radius: 10px;
        padding: 10px;
    }

    select:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        ::-webkit-scrollbar {
            display: none;
        }

        h1 {
            font-size: 1.6em;
            font-weight: 800;
        }
    
        h2 {
            font-size: 1.4em;
        }
    
        h3 {
            font-size: 1.3em;
            font-weight: normal;
        }
    
        h4 {
            font-size: 1.1em;
        }
    
        h5 {
            font-size: 1em;
        }
    }
`;