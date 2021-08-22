import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    padding-top: 15px;
`;

export const Content = styled.div`
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    
    svg path, svg polygon {
        fill: var(--neutral80);
    }
`;

export const Logo = styled.img`
    height: 40px;
`;