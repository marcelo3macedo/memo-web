import { ICardEdit } from "@interfaces/Card/card-edit.interface";
import styled from "styled-components";

export const Wrapper = styled.div<ICardEdit>`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 100vH;
    background: rgba(0,0,0,0.4);
    display: ${props => props.show ? "flex":  "none" };
    align-items: center;
`;

export const Content = styled.div`
    background: var(--secondary15);
    padding: 20px;
    margin: auto;
    width: 80%;    
    max-width: 450px;
    border-radius: 10px;
`;

export const Title = styled.h2`
    color: var(--neutral100);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Action = styled.div`
    padding: 10px 0;

    button {
        width: 100%;
    }

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const Actions = styled.div`
    padding: 10px 0 5px 0;
    display: flex;    
`;

export const ActionTitle = styled.h5`
    color: var(--neutral0);
`;

export const ActionArea = styled.div`
    padding: 5px;
    width: 100%;
`;

