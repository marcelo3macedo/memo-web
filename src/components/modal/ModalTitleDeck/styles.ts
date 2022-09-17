import { ICardEdit } from "@interfaces/Card/card-edit.interface";
import styled from "styled-components";

export const Wrapper = styled.div<ICardEdit>`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100vH;
    background: rgba(0,0,0,0.4);
    display: ${props => props.show ? "flex":  "none" };
    align-items: center;
`;

export const Content = styled.div`
    background: var(--secondary15);
    padding: 30px 20px;
    margin: auto;
    width: 80%;    
    max-width: 450px;
    border-radius: 10px;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    input {
        margin-bottom: 5px;
        padding: 15px 10px;
        border-radius: 10px;
        background: var(--neutral0);
        border: none;    
    }

    textarea {
        margin-bottom: 5px;
        padding: 15px 10px;
        border-radius: 10px;
        border: none;
        background: var(--neutral0);
        resize: none;
        height: 75px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    color: var(--secondaryDark);
`;

export const Header = styled.div`
    float: right;
    margin-top: -10px;

    svg path {
        fill: var(--neutral90)!important;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const FieldName = styled.h5`
    margin-bottom: 10px;
    color: var(--neutral100);
    font-weight: bold;
`;