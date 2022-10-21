import styled from "styled-components";

export const Wrapper = styled.div`    
    margin: 5px 0;
`;

export const Content = styled.div`
    background: var(--neutral0);
    box-shadow: 0 0 1px 1px var(--neutral50);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`   
`;

export const Header = styled.div`   
`;

export const Title = styled.h5`
    color: var(--primary);
    font-style: italic;
`;

export const CardContent = styled.h4`
    color: var(--primary);
    font-weight: bold;
    padding: 5px 0;
`;

export const SecretContent = styled.h4`
    color: var(--primary);
`;

export const Footer = styled.div`    
    display: flex;
    padding: 5px 0;
    flex-direction: column;
`;

export const Action = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    
    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const ActionBox = styled.div`
    margin: 5px 0;
    padding: 5px;
    border: 1px solid var(--neutral60);
    border-radius: 5px;
    text-align: center;

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const ActionTitle = styled.h6`
    padding: 2px 0;
`;