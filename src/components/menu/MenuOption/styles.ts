import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 5px;
    border-bottom: 1px solid var(--neutral50);

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
    margin: 2px 0;    
`;

export const Header = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;   

    svg path {
        fill: var(--neutral90);
    }
`;

export const Info = styled.div`
    padding: 7px;
`;

export const Title = styled.h5`    
    color: var(--neutral100);
`;

export const Value = styled.h2`
    
`;