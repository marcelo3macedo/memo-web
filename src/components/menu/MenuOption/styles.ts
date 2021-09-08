import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px 0;

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
        fill: var(--neutral90);
    }
`;

export const Info = styled.div`
    padding: 10px;
`;

export const Title = styled.h5`    
    color: var(--neutral90);
`;

export const Value = styled.h2`
    
`;