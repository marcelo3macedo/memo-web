import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px 10px;
`;

export const Content = styled.div`
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    
    svg path, svg polygon {
        fill: var(--neutral100);
    }

    svg.list path, svg.list polygon {
        fill: var(--neutral100);
    }
`;