import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px 10px;

    @media (min-width: 768px) {
        display: none;
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
        fill: var(--neutral90);
    }

    svg.list path, svg.list polygon {
        fill: var(--neutral0);
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 10px;

        .list { 
            display: none;
        }
    }
`;