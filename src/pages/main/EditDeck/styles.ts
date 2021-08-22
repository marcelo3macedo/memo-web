import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
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

export const Value = styled.input`
    margin: 20px 0 10px 0;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--neutral80);
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
`;

export const Action = styled.div`
    width: 50%;
    margin: 10px auto;

    button {
        width: 100%;
    }
`;