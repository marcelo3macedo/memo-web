import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10px;
`;

export const Content = styled.div`
    max-width: 100%;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    svg {
        padding-right: 5px;

        path {
            fill: var(--secondary100);
        }        
    }
`;

export const Title = styled.h3`
    padding: 10px 0;
    color: var(--neutral90);
`;

export const Cards = styled.div`
    padding: 20px 0;
`;

export const Card = styled.div`
    padding: 40px 20px;
    margin-bottom: 20px;
    background: var(--secondary80);
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 100%;
    max-width: 80px;
`;

export const CardText = styled.h3`
    color: var(--neutral90);
    max-width: 200px;
    margin-left: 20px;
`;

