import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 15px;
    border-radius: 10px;
    background: var(--neutral30);
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
`;

export const TextValue = styled.h6`
    font-weight: bold;
`;