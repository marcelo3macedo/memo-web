import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 15px;
    border-radius: 5px;
    background: var(--neutral50);
    box-shadow: 0 0 1px 1px var(--neutral90);
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

export const TextValue = styled.h5`
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--neutral100);
`;

export const Loading = styled.div`
    opacity: var(--alpha);
`;