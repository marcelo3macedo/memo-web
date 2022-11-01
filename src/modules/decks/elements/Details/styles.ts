import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 80px;
    padding: 10px 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: initial;
    justify-content: initial;

    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const Title = styled.h3`
    color: var(--neutral80);
    padding: 0 5px;
`;

export const Item = styled.div`
    display: flex;
    padding: 0 10px;
`;

