import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    display: flex;
    align-items: center;   
    min-width: 100px;

    svg {
        path {
            fill: var(--neutral80);
        }
    }    
`;

export const Title = styled.h5` 
    color: var(--neutral80);
    padding: 0 5px;
`;