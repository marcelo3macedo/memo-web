import styled from "styled-components";
import { AddDeckCard } from "@interfaces/Deck/addDeckCard.interface";

export const Wrapper = styled.div`
    padding: 10px 0;
`;

export const Content = styled.div`
`;

export const Title = styled.h4`
    color: var(--neutral90);
`;

export const Area = styled.div`
    position:relative;
`;

export const Options = styled.div`
    overflow-x: auto;
    display: inline-block;
    white-space: nowrap;
    padding-top: 10px;
`;

export const Option = styled.div`
    width: 60px;
    padding: 10px;
    float: left;
`;

export const Picture = styled.img<AddDeckCard>`
    border: 3px solid ${props=>props.selected ? "var(--purple)": "transparent"}; 
    max-width: 100%;
`;