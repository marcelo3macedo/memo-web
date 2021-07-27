import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 7px 15px;
    border-radius: 10px;
    background: var(--neutral30);
    color: var(--neutral80);
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