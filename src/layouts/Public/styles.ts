import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--secondary80);
    min-height: 100vH;
    padding: 10px 0;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: auto;   
    background: #fff;
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
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: var(--secondary100);

    @media (max-width: 768px) {
        padding: 10px;
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
    padding: 0 20px;
`;

export const MenuTitle = styled.h4`
    font-weight: bold;
    color: #fff;
`;

export const Action = styled.div`
`;

export const Image = styled.img`
    width: 150px;

    @media (max-width: 768px) {
        width: 100px;
    }
`;