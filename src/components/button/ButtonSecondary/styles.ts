import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 15px;
    border-radius: 10px;
    background: var(--neutral30);
    background: linear-gradient(0deg, var(--neutral30) 0%, var(--neutral30) 50%, var(--neutral10) 100%);
    color: var(--neutral100);
    border: 1px solid var(--neutral60);
    min-width: 100px;
    text-align: center;
    
    h5 {
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:active {
        opacity: var(--alpha);
    }
`;

export const TextValue = styled.h6`
    font-weight: bold;
`;

export const Loading = styled.div`
    opacity: var(--alpha);
`;