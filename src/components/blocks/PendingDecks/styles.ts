import styled from "styled-components";
import { PendingDecks } from "@interfaces/Deck/pendingDecks.interface";

export const Wrapper = styled.div<PendingDecks>`
    margin: 5px 0;
    padding: 20px 10px;
    display: ${props => props.show ? "block": "none"};
    background: var(--secondary80);
`;

export const Content = styled.div`
`;

export const Title = styled.h3`
    color: var(--secondary10);
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

