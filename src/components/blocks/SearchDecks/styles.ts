import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
`;

export const Title = styled.h3`
    color: var(--neutral90);
`;

export const Search = styled.div`
    padding: 5px 0;
    display: flex; 
    align-items: center;
    justify-content: center;
    border: 1px solid var(--neutral60);
    border-radius: 10px;
    width: 90%;
    margin: auto;
    max-width: 500px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const SearchInput = styled.input`
    padding: 10px;
    border: none;
    width: 100%;
    font-size: 9pt;

    @media (min-width: 768px) {
        font-size: 11pt;
    }
`;

export const SearchIcon = styled.div`
    padding: 0 10px;
`;
