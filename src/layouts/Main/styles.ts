import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 90vH;
    max-width: 100%;
    overflow: hidden;
`;

export const Content = styled.div`    
    
`;

export const Section = styled.div`
    @media (min-width: 768px) {
        padding: 0 10px;
        max-width: 1400px;
        margin: auto;
    }

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const Body = styled.div`
    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 40px;
        background: var(--secondary15);
        width: 70%;
    }
`;