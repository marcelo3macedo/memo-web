import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--secondaryDark);
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`;

export const Logo = styled.img`
    height: 40px;    
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
`;

export const Option = styled.div`
    padding: 0 15px;

    svg path, svg polygon {
        fill: var(--neutral10);
    }
`;

export const Menu = styled.ul`
    list-style: none;
    display: inline-flex;
`;

export const MenuItem = styled.li`  
    padding: 15px 30px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: var(--alpha);
    }
`;

export const MenuContent = styled.h4`
    font-weight: bold;
    color: var(--neutral50);
`;