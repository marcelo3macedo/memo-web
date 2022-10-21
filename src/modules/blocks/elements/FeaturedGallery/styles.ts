import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    width: 100%;
    overflow-x: auto;
    padding: 20px 0;
`;

export const DecksArea = styled.div`
    display: inline-flex;
    padding-bottom: 5px;    
`;

export const DeckItem = styled.div`
    min-width: 220px;
    padding-right: 10px;

    @media (min-width: 768px) {
        min-width: 400px;
        padding-right: 20px;
    }
`;

export const Title = styled.h2`
    padding: 10px 0;
    color: var(--secondaryDark);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    svg {
        padding-right: 5px;

        path {
            fill: var(--secondaryDark);
        }        
    }
`;

export const Container = styled.div`
    padding: 10px;
`;
