import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 80px 0;

    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const Content = styled.div`
`;

export const Title = styled.h1`
    color: var(--neutral90);
    padding: 0 5px;
    text-align: center;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px;
`;

export const Options = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Option = styled.div`
`;