import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--secondary80);
    min-height: 100vH;

    @media (min-width: 768px) {
        padding: 10px 0;
    }
`;

export const Content = styled.div`
    background: var(--secondary30); 
    
    @media (min-width: 768px) {
        max-width: 1100px;
        padding: 0;
        margin: auto;
        display: flex;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
    }
`;

export const Section = styled.div`
    @media (min-width: 768px) {
        width: 80%;
        padding: 10px;
    }
`;

export const Body = styled.div`
    padding: 10px 0;
`;