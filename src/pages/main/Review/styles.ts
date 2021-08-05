import styled from 'styled-components';
import { IActions } from "@interfaces/Card/actions.interface";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vH;
`;

export const Content = styled.div`
    background: var(--neutral30);
    border-radius: 10px;
    width: 80%;
    margin: auto;
    padding: 20px;
`;

export const Position = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

export const Info = styled.h5`
`;

export const Card = styled.div`
    text-align: center;
    padding: 80px 0;
    border: 1px solid var(--neutral60);
    border-radius: 10px;
    margin: 10px 0;
`;

export const Message = styled.h3`
`;

export const Flip = styled.div`
    float: right;
    margin-top: -50px;
    margin-right: 10px;

    svg {
        fill: var(--neutral60);
    }
`;

export const Actions = styled.div<IActions>`
    display: ${props => props.show ? "flex": "none"};
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Action = styled.div`
    border: 1px solid var(--neutral60);
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
`;