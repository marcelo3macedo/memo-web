import styled from "styled-components";

export const Wrapper = styled.div`
    margin-right: 10px;
    position: relative;
    width: 100%;
    max-width: 200px;
    height: 200px;
    border-radius: 10px;
    background: var(--neutral0);
    overflow: hidden;

    @media (min-width: 768px) {
        max-width: 100%;
    }
`;

export const Content = styled.div`
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const Header = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Details = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const Title = styled.h3`
    color: var(--secondaryDark);
    padding: 0 10px;
    text-align: center;
`;

export const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        path {
            fill: var(--neutral80);
        }
    }
`;

export const StatusTitle = styled.h6`  
    color: var(--neutral80);
    padding: 0 5px;
    font-weight: normal;
`;