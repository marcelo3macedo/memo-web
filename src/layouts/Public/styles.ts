import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vH;
    
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Content = styled.div`
    background: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
        border-radius: 0;        
    }
`;

export const Section = styled.div`
`;

export const Body = styled.div`    
`;

export const Header = styled.div`
    max-width: var(--maxWidth);
    margin: auto;   
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 15px;
        border-bottom: 2px solid #ccc;
    }
`;

export const LogoArea = styled.div`
`;

export const Menu = styled.ul`
    list-style: none;
    margin-left: 0;
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    padding: 0 25px;
`;

export const MenuTitle = styled.h4`
    font-weight: bold;
    font-size: 11pt;
    color: var(--neutral80);
`;

export const Action = styled.div`
    div {
        border-radius: 5px;
    }

    h6 {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--neutral80);
    }
`;

export const Image = styled.img`
    width: 120px;
    padding-right: 25px;

    @media (max-width: 768px) {
        width: 100px;
        border-right: none;
    }
`;