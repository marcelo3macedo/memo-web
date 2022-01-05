import styled from "styled-components";
import { DeckCard } from "@interfaces/Deck/deckCard.interface";

export const Wrapper = styled.div`
    margin-right: 10px;
    position: relative;
    width: 180px;
    max-width: 100%;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid var(--neutral50);
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
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    svg path {
        fill: var(--secondary10)!important;
    }
`;

export const Quantity = styled.h3`
    color: var(--secondary10);
    font-weight: bold;
    padding-left: 5px;
`;

export const Title = styled.h3`
    font-weight: bold;
    color: var(--secondary10);
    text-align: left;
    padding: 10px;
`;

export const Opacity = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;

export const Data = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
`;

export const Frequency = styled.h5`
    color: var(--secondary10);
`;

export const TitleInfo = styled.h6`
    color: var(--secondary10);
    font-weight: bold;
    padding: 5px;
`;

export const FrequencyInfo = styled.div`
    text-align: left;
    padding: 10px;
`;

export const FrequencyTitle = styled.h6`
    color: var(--secondary10);    
`;

export const VisibilityInfo = styled.div`
    padding: 10px 0px 10px 10px;
    display: flex;

    svg {
        path {
            fill: var(--secondary10);
        }
    }
`;

