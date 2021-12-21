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

export const Title = styled.h3`
    padding: 10px 0;
    color: var(--neutral90);
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

export const Container = styled.div`
    padding: 10px;
`;
