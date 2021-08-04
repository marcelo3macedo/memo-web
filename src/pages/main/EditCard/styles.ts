import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Content = styled.div`
    padding: 10px 0;
`;

export const Title = styled.h1`
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;

    input {
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--neutral80);
    }
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

