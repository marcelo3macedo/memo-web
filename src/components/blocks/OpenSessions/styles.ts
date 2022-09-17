import styled from "styled-components";
import { PendingDecks } from "@interfaces/Deck/pendingDecks.interface";

export const Wrapper = styled.div<PendingDecks>`
    margin: 5px 0;
    padding: 10px 0px;
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
`;

export const Title = styled.h2`
    padding: 10px 0;
    color: var(--secondaryDark);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        padding-right: 5px;

        path {
            fill: var(--secondaryDark);
        }        
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Block = styled.div`
    width: 100%;
    opacity: 0.8;

    @media (min-width: 768px) {
        max-width: 200px;
    }
`;

