import styled from "styled-components";
import { PendingDecks } from "@interfaces/Deck/pendingDecks.interface";

export const Wrapper = styled.div<PendingDecks>`
    margin: 5px 0;
    padding: 0px 10px;
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
`;

export const Title = styled.h3`
    color: var(--secondary10);
`;

export const Footer = styled.div`
    display: flex;
`;

export const Block = styled.div`
    width: 100%;
`;

