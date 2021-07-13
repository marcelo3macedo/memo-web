import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--secondary100);
    color: var(--textSecondary100);
    min-width: 100px;
    text-align: center;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const TextValue = styled.h5`
`;