import styled from "styled-components";
import { ICard } from "@interfaces/Card/card.interface";

export const Wrapper = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 33.33%;
        float: left;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    padding: 10px;

    @media (min-width: 768px) {
        padding: 20px;
        height: 200px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Area = styled.div<ICard>`
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background: var(--neutral0);

    @media (min-width: 768px) {
        height: 200px;
        overflow-y: hidden;
    }
`;

export const Header = styled.div`
    width: 100%;
    padding: 5px;
`;

export const Title = styled.h6`
    color: var(--neutral90);
`;

export const Content = styled.h3`
    margin-bottom: 5px;
    color: var(--secondaryDark);
`;

export const SecretContent = styled.h5`
    color: var(--neutral90);
`;

export const Options = styled.div`
    margin-top: 10px;
    margin-right: 10px;
    
    svg {
        path {
            fill: var(--neutral90);
        }
    }
`;

export const OptionsBox = styled.div<ICard>`
    position: absolute;
    background: var(--neutral30);
    right: 15px;
    margin-top: 15px;
    padding: 5px 20px;
    border-radius: 5px;
    display: ${props => props.showOptions ? "block" : "none"};

    @media (min-width: 768px) {
        right: inherit;
        margin-left: -60px;
    }
`;

export const OptionBox = styled.div`
    padding: 5px 0;
`;

export const OptionBoxTitle = styled.h6`
    color: var(--neutral100);
`;

export const RemoveArea = styled.div`
    position: absolute;
    z-index: 8;
    background: var(--neutral90);
    padding: 8px;
    border-radius: 100%;
    margin-right: -15px;
    margin-top: -15px;

    svg path {
        fill: var(--neutral0)!important;
    }
`;