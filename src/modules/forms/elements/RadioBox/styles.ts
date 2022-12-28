import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px 0;
`;

export const Content = styled.label`
    display: flex;
    align-items: center;
    padding: 10px 0;
`;

export const RadioArea = styled.div`
    display: flex;
`;

export const RadioIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 0 5px;

    svg {
        fill: var(--neutral100);        
    }
`;

export const RadioInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
`;

export const RadioTitle = styled.h4`
    color: var(--neutral100);
`;

export const RadioDescription = styled.h5`
    color: var(--neutral100);
    padding: 5px 0;
`;




