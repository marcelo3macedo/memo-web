import styled from "styled-components";
import { DeckCard } from "@interfaces/Deck/deckCard.interface";

export const Wrapper = styled.div`
    position: relative;
    width: 50%;
    height: 150px;
    position:relative;
    background: var(--primary);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
`;

export const Content = styled.div<DeckCard>`
    position: absolute;
    background: url("${props => props.background}") center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
`;

export const Info = styled.div`
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    svg path {
        fill: var(--secondary10)!important;
    }
`;

export const Quantity = styled.h4`
    color: var(--secondary10);
    font-weight: bold;
    padding-left: 5px;
`;

export const Title = styled.h4`
    padding: 5px;
    font-weight: bold;
    color: var(--secondary10);
`;

export const Opacity = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
`;

export const Data = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
`;

