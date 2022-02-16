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

export const Opacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
`;

export const Data = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
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

export const Footer = styled.div`
    width: 100%;
`;

export const Details = styled.div`  
`;

export const Options = styled.div`
    margin-top: 10px;
    margin-right: 10px;
    
    svg {
        path {
            fill: #fff;
        }
    }
`;

export const SubTitle = styled.h6`
    color: var(--secondary10);
    padding: 10px;
`;


export const Title = styled.h1`
    font-weight: bold;
    color: var(--secondary10);
    text-align: left; 
    padding: 0 10px;
`;

export const Statuses = styled.div`
    
`;

export const Status = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 10px;

    svg {
        path {
            fill: #fff;
        }
    }
`;

export const StatusTitle = styled.h6`  
    color: var(--secondary10);
    padding: 0 5px;
    font-weight: normal;
`;

export const View = styled.div`
    padding: 15px 0;
    text-align: center;
    width: 100%;

    div {
        background: var(--neutral30);
        margin: auto;
        width: 100px;
        padding: 5px 10px;
    }
`;

export const OptionsBox = styled.div<DeckCard>`
    position: absolute;
    background: var(--neutral30);
    right: 10px;
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 5px;
    display: ${props => props.showOptions ? "block" : "none"};
`;

export const OptionBox = styled.div`
    padding: 5px 0;
`;

export const OptionBoxTitle = styled.h6`
    color: var(--neutral100);
`;

