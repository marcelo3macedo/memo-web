import styled from "styled-components";
import { DeckCard } from "@interfaces/Deck/deckCard.interface";

export const Wrapper = styled.div`
    margin-right: 10px;
    position: relative;
    width: 220px;
    max-width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media (min-width: 768px) {
        width: 400px;
        height: 200px;
        margin-right: 20px;
    }
`;

export const Content = styled.div<DeckCard>`
    position: absolute;
    background: url("${props => props.background}") center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-direction: column;
`;

export const Info = styled.div`
    padding: 10px 10px 20px 10px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    width: 100%;

    svg path {
        fill: var(--secondary10)!important;
    }
`;

export const Quantity = styled.h2`
    color: var(--secondary10);
    font-weight: bold;
    padding-left: 5px;
`;


export const Opacity = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, var(--alphaStrong));
`;

export const Block = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-direction: column;
`;

export const Header = styled.div `
    padding: 15px;

    @media (min-width: 768px) {
        max-height: 100px;
        overflow: hidden;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    color: var(--secondary10);
    text-align: left;
    padding: 5px 0;
`;

export const Frequency = styled.h5 `
    color: var(--secondary10);
`;

export const Body = styled.div `
    padding: 15px;
    display: flex;
    align-items: center;

    svg path {
        fill: var(--secondary10)!important;
    }
`;