import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;

    @media (min-width: 768px) {
        max-width: 800px;
    }
`;

export const Content = styled.div`
`;

export const Description = styled.h4`
    color: var(--neutral100); 
    white-space: pre-line;  
    margin-bottom: 20px;
`;

export const Action = styled.div`
    width: 100%;
    margin: 10px auto;

    button {
        width: 100%;
    }
`;