import { ValidationAlert } from "@interfaces/Validation/validationAlert.interface";
import styled from "styled-components";

export const Wrapper = styled.div<ValidationAlert>`
    display: ${props => props.show ? "block": "none"};
    position: fixed;
    bottom: 10px;
    right:0px;
    width: 100%;
    max-width: 400px;
`;

export const Content = styled.div`
    padding: 10px;
`;

export const MessageArea = styled.div`
    background: var(--warm30);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
`;

export const MessageText = styled.h5`
`;

export const Messages = styled.div`
    padding: 0 10px;
`;