import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px 0;
`;

export const Content = styled.div`
    padding: 5px 5px 5px 10px;
    display: flex; 
    background: var(--neutral0);
    border-radius: 20px;
`;

export const Title = styled.h3`
    color: var(--neutral90);
`;

export const Search = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    max-width: 500px;


    @media (min-width: 768px) {
        max-width: 100%;
    }
`;

export const SearchInput = styled.input`
    padding: 5px;
    border: none;
    width: 100%;
    font-size: 9pt;

    @media (min-width: 768px) {
        font-size: 11pt;
    }
`;

export const SearchIcon = styled.div`
    svg {
        background: var(--secondaryDark);
        padding: 5px;
        border-radius: 100%;
        width: 24px;
        height: 24px;
        
        path {
            fill: var(--neutral0);
        }
    }
`;
