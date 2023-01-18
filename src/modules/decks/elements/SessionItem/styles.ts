import styled from "styled-components";
import { SessionItem } from "@interfaces/Session/sessionItem.interface";

export const Wrapper = styled.div<SessionItem>`
    text-align: center;
    width: ${props => props.layout === 'full'  ? '100%': '50%'};
`;

export const Content = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

export const Title = styled.h1`
    color: var(--neutral90);
    padding: 10px;
    text-align: center;
`;

export const Description = styled.h4`
`;
