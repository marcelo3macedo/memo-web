import styled from "styled-components";
import { ConfirmRemove } from "@interfaces/Session/confirmRemove.interface";

export const Wrapper = styled.div<ConfirmRemove>`
    position: fixed;
    z-index: 8;
    top: 0;
    left: 0;
    height: 100vH;
    width: 100%;
    background: rgba(0,0,0,var(--alphaStrong));
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
    padding: 20px 10px;
    padding-bottom: 10px;
    text-align: center;
    background: var(--neutral0);
    width: 85%;
    max-width: 500px;
    margin: 80px auto;
    display: flex;
    align-items: end;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: var(--secondaryDark);
    padding: 5px 0;
`;

export const Actions = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Action = styled.div`
    padding: 0 10px;
    width: 100%;

    button {
        width: 100%;
        margin: 5px 0;
    }

    &.remove button {
        background: var(--warm90);
    }

    &.cancel button {
        background: var(--neutral80);
    }
`;

export const RemoveArea = styled.div`
    position: absolute;
    z-index: 8;
    background: var(--neutral100);
    padding: 10px;
    border-radius: 100%;
    margin-right: -28px;
    margin-top: -33px;

    svg path {
        fill: var(--neutral0)!important;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;