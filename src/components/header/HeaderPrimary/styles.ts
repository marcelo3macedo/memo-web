import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    padding-top: 15px;

    @media (min-width: 768px) {
        padding: 0px;
        padding-top: 0px;
    }
`;

export const Content = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    
    svg path, svg polygon {
        fill: var(--neutral80);
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 10px;

        .list { 
            display: none;
        }
    }
`;

export const Logo = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block;
        height: 32px;
    }
`;