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
    background: var(--neutral10);
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

    textarea {
        margin-bottom: 5px;
        padding: 15px 10px;
        border-radius: 10px;
        border: 1px solid var(--neutral60);
        resize: none;
        height: 75px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    color: var(--neutral90);
`;

export const Message = styled.h4`
    margin-top: 20px;
    color: var(--neutral90);
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

export const Actions = styled.div`
    display: flex;
    padding: 20px 0 0 0;
    width: 100%;    
`;

export const Action = styled.div`
    padding: 10px 20px;
    border: 1px solid var(--neutral60);
    border-radius: 10px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const ActionTitle = styled.h5`
    color: var(--neutral90);
`;

