import styled from "styled-components";
import { ShareOption } from "@interfaces/Deck/shareOption.interface";

export const Wrapper = styled.div`
    margin-top: 10px;
    padding: 20px 0;
    border-top: 2px solid #ccc;
    width: 100%;    
`;

export const Content = styled.div`
    
`;

export const Action = styled.div<ShareOption>`
    display: ${props => props.show ? 'block': 'none'};
    padding: 20px 0;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h4`
    
`;

export const Option = styled.div`
    padding: 0 10px;
`;