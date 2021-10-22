import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0 10px 0;
`;

export const Content = styled.div`
`;

export const Header = styled.h6`
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--neutral90);
    font-weight: bold;
`;

export const CategoryArea = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    overflow-x: auto;
    max-width: 100%;
`;

export const Category = styled.div`
    border: 1px solid var(--neutral90);
    padding: 12px 10px;
    min-width: 90px;
    text-align: center;
    margin-right: 20px;
`;

export const Title = styled.h5`
    color: var(--neutral90);
`;
