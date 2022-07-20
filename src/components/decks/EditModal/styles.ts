import styled from "styled-components";
import { ConfirmRemove } from "@interfaces/Session/confirmRemove.interface";

export const Wrapper = styled.div<ConfirmRemove>`
    position: fixed;
    z-index: 22;
    top: 0;
    left: 0;
    height: 100vH;
    width: 100%;
    background: rgba(0,0,0,var(--alphaStrong));
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
    padding: 20px;
    padding-bottom: 10px;
    text-align: center;
    background: var(--neutral0);
    width: 80%;
    max-width: 500px;
    margin: 80px auto;
    display: flex;
    align-items: end;
    flex-direction: column;
`;

export const CloseArea = styled.div`
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

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

export const Title = styled.h2`
    color: var(--secondaryDark);    
`;

export const Description = styled.h5`
    color: var(--secondaryDark);
    text-align: left;
    padding: 10px 0;
`;

export const Details = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const StatusTitle = styled.h5`  
    color: var(--neutral80);
    padding: 0 10px;
    font-weight: normal;
`;

export const Actions = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Action = styled.div`
    padding: 0 5px;
    width: 100%;

    button {
        width: 100%;
        margin: 5px 0;
        border-bottom: 2px solid var(--neutral60);      
    }

    button h4 {
        color: var(--neutral100);
    }

    &.edit button {
        background: var(--neutral50);        
    }

    &.review button {
        background: var(--secondary60);        
    }
`;