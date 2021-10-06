import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    svg path {
        fill: var(--neutral90); 
    }
`;

export const Total = styled.h3`
    padding: 0 5px;
    color: var(--neutral90);
`;