import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;
`;

export const Content = styled.div`
    padding: 0 10px;
`;

export const Title = styled.h1`
`;

export const Term = styled.h3`
`;

export const SearchArea = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid var(--neutral90);
    padding: 0 10px;
    margin-top: 10px;
`;

export const SearchInput = styled.input`
    padding: 15px;
    padding-left: 5px;
    border:none;
    width: 100%;
    color: var(--neutral90);
`;

export const Results = styled.div`
    padding: 20px 0;
`;

export const Header = styled.h6`
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--neutral90);
    font-weight: bold;
`;

export const Message = styled.h5`
    color: var(--neutral90);
    padding: 10px 0;
`;