import styled from "styled-components";

export const Wrapper = styled.div`    
    padding: 15px 10px;
`;

export const Content = styled.div`
    padding: 10px;
    border: 1px solid var(--neutral60);
    box-shadow: 0 0 1px 1px var(--neutral50);
    background: var(--neutral0);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const Title = styled.h5`
    color: var(--neutral100);
`;

export const User = styled.div`    
`;

export const Action = styled.div`    
`;