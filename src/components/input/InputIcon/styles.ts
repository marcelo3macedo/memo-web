import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 5px 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid var(--neutral60);
    border-radius: 5px;
    padding: 5px;

    svg {
        padding: 8px;
    }
`;

export const InputBox = styled.input`
    padding: 10px 5px;
    border: none;
    color: var(--neutral100);
    background: none;

    &::placeholder {
        color: var(--neutral60);
    }
`;
