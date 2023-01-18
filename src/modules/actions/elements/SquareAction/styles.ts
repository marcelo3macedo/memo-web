import styled from "styled-components";
import { IOption } from "@interfaces/Option/option.interface";

export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div<IOption>`
    background: ${props => props.template ? 'var(--cold100)': 'var(--secondaryDark)'};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 25px 5px;

    svg {
        path {
            fill: var(--neutral0);
        }
    }

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const Details = styled.div`  
    @media (max-width: 768px) {
        width: 100%;
    }  
`;

export const Action = styled.div`    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: var(--neutral0);
    padding: 10px 0 5px 0;
`;

export const SubTitle = styled.h4`
    color: var(--neutral0);
`;

export const Box = styled.div`
    margin: 5px;
    text-align: center;
`;