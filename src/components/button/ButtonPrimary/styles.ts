import styled from "styled-components";

export const Wrapper = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--secondary100);
    background: linear-gradient(0deg, var(--secondary100) 0%, var(--secondary100) 50%, var(--secondary90) 100%);
    color: var(--textSecondary100);
    border: none;
    min-width: 100px;
    text-align: center;
    
    h5 {
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:focus {
        border: none;
    }
`;

export const TextValue = styled.h5`
`;