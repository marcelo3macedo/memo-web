import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--neutral50);
    margin: 0 0 15px 0;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Content = styled.div`
    
`;

export const Title = styled.h3`
    padding: 5px 0;    
`;

export const Description = styled.h4`
    padding: 5px 0;
    color: var(--neutral100);
`;