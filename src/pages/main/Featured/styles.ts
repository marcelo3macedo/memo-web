import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;

    @media (min-width: 768px) {
        max-width: 800px;
    }
`;

export const Content = styled.div`
`;

export const Action = styled.div`
    width: 100%;
    margin: 10px auto;

    button {
        width: 100%;
    }
`;