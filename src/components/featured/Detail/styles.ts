import styled from "styled-components";

export const Wrapper = styled.div`    
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const Title = styled.h6`
    color: var(--neutral80);
    padding: 0 5px;
    font-weight: normal;
`;