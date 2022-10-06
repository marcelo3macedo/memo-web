import styled from "styled-components";

export const Wrapper = styled.div`    
    margin: 20px 0;
`;

export const Content = styled.div`
    background: var(--neutral10);
    box-shadow: 0 0 1px 1px var(--neutral50);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const Title = styled.h4`
    color: var(--neutral100);
`;

export const SubTitle = styled.h3`
    margin: 5px 0;    
    color: var(--neutral100);
`;

export const Action = styled.div`
    margin: 10px 0;
`;