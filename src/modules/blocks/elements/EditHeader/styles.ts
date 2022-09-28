import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
`;

export const Title = styled.h1`
    color: var(--neutral100);
`;

export const Description = styled.h3`
    white-space: pre-line;
    color: var(--neutral100);
    font-weight: normal;
    margin: 10px 0;
`;

export const Action = styled.div`
    svg path {
        fill: var(--neutral100);
    }

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const ActionDescription = styled.h5`
    padding: 10px 0;
    color: var(--neutral100);
`;