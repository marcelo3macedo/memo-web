import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 90vH;
    max-width: 100%;
    overflow: hidden;
`;

export const Content = styled.div`    
    
`;

export const Section = styled.div`
    background: var(--secondary15);

    @media (min-width: 768px) {
        max-width: var(--maxWidth);
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

