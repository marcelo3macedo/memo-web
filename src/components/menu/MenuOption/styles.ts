import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 5px;

    @media (max-width: 768px) {
        background: var(--neutral0);
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;   
`;

export const Header = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;   

    svg path {
        fill: var(--neutral50);
    }
`;

export const Info = styled.div`
    padding: 7px;
`;

export const Title = styled.h5`    
    color: var(--neutral50);
`;

export const Value = styled.h2`
    
`;