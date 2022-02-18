import styled from "styled-components";
import { DeckCard } from "@interfaces/Deck/deckCard.interface";

export const Wrapper = styled.div`
    margin-right: 10px;
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--neutral60);

    @media (min-width: 768px) {
        height: 250px;
    }
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

export const Opacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, var(--alphaStrong));
`;

export const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-direction: column;        
`;

export const Header = styled.div`
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 100%;    
`;

export const Details = styled.div`  
`;

export const Title = styled.h1`
    font-weight: bold;
    color: var(--secondary10);
    text-align: left; 
    padding: 10px;
`;
