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
        display: flex;
        align-items: center;
        flex-direction: column;        
    }
`;

export const Body = styled.div`
    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 10px 20px;
        background: var(--secondary15);
        width: 70%;
        margin: auto;        
    }
`;