import styled from "styled-components";
import { ValidationAlert } from "@interfaces/Validation/validationAlert.interface";

export const Wrapper = styled.div<ValidationAlert>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vH;
    background: rgba(var(--alphaColor), var(--alpha));
    display: ${props => props.show ? "flex": "none"};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background: var(--neutral10);
    max-width: 80%;
    width: 400px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
`;

export const Title = styled.h3`
    padding: 5px 5px 10px 5px;
    border-bottom: 1px solid var(--neutral50);
`;

export const MessageArea = styled.div`
    padding: 20px 0;
`;

export const Message = styled.h5`
    line-height: 20px;
    padding: 3px 0;
`;

export const Actions = styled.div`
    padding: 10px;
    max-width: 70%;
    margin: auto;

    button {
        width: 100%;
    }
`;

