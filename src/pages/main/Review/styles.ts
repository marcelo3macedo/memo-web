import styled from 'styled-components';
import { IActions } from "@interfaces/Card/actions.interface";
import { ICard } from "@interfaces/Card/card.interface";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vH;
    background: var(--secondary20);
`;

export const Content = styled.div`
    height: 100vH;
    width: 100%;
    padding: 10px;
    max-width: 1100px;
    margin: auto;
`;

export const Header = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    svg path, svg polygon {
        fill: var(--neutral80);
    }
`;

export const Body = styled.div`
    background: var(--neutral30);
    box-shadow: 0 0 2px 2px var(--neutral50);
    border-radius: 5px;
    width: 95%;
    margin: auto;
    padding: 20px 10px;
`;


export const Position = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

export const Info = styled.h5`
    color: var(--neutral100);
`;

export const Title = styled.h5`
    padding: 10px 0;
`;

export const Card = styled.div<ICard>`
    display: ${props => props.show ? "block": "none"};
    text-align: center;
    padding: 80px 0;
    border-radius: 10px;
    margin: 10px 0;
`;

export const CardArea = styled.div`
`;

export const Message = styled.h1`
    color: var(--neutral100);
`;

export const Flip = styled.div`
    float: right;
    margin-top: -40px;

    svg {
        fill: var(--neutral100);
    }
`;

export const Actions = styled.div<IActions>`
    display: ${props => props.show ? "flex": "none"};
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Action = styled.div`
    border: 1px solid var(--neutral100);
    background: var(--neutral100);
    color: #fff;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    margin: 0 10px;

    @media (max-width: 768px) {
        margin: 0 2px;
    }
`;

export const ActionValue = styled.h6`
    font-weight: bold;
    color: #fff;
`;