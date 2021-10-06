import styled from "styled-components";
import { ICard } from "@interfaces/Card/card.interface";

export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;

export const CardArea = styled.div<ICard>`
    border: 1px solid var(--neutral60);
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-image: url('${props => props.background}');
    background-size: cover;
`;

export const Header = styled.div`
    width: 100%;
`;

export const Title = styled.h3`
    margin-bottom: 5px;
`;

export const Answer = styled.h5`
`;

export const Actions = styled.div`
`;

export const Action = styled.div`
    display: flex;
    border: 1px solid var(--neutral60);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    align-items: center;
    background: var(--neutral10);
    color: var(--primary);

    svg {
        width: 10px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const ActionName = styled.h6`
    padding-left: 5px;
`;
