import styled from "styled-components";
import { DeckCard } from "@interfaces/Deck/deckCard.interface";

export const Wrapper = styled.div`
    border: 1px solid var(--neutral50);
    padding: 15px 20px;
    border-radius: 10px;
    margin: 10px 0;
`;

export const Content = styled.div<DeckCard>`
 
`;

export const Title = styled.h5`
    color: var(--neutral90);
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5px;

    svg {
        width: 15px;
    }

    svg path {
        fill: var(--neutral90);
    }
`;

export const Quantity = styled.h5`
    padding: 0 5px;
    color: var(--neutral90);
`;