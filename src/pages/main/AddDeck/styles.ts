import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    min-height: 100vH;
`;

export const Content = styled.div`
    padding: 10px 0;
`;

export const Title = styled.h1`
    color: var(--neutral90);
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;

    input {
        margin: 20px 0 10px 0;
        padding: 15px 10px;
        border-radius: 10px;
        border: 1px solid var(--neutral60);
    }

    @media (min-width: 768px) {
        button {
            max-width: 250px;
        }
    }
`;
