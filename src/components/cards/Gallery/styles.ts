import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 40px;
    display: inline-block;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 15px 0;

    @media (min-width: 768px) {
        margin-bottom: 20px;
        display: block;        
    }
`;

export const Title = styled.h3`
    padding: 5px 0;
    color: var(--neutral100);
`;

export const Message = styled.h5`
    padding: 15px 0;
    color: var(--neutral90);
    width: 100%;
    text-align: left;
`;

export const Card = styled.div`
    padding: 5px 20px;
    border-radius: 10px;
    margin: 10px 0;
    width: 100%;
`;

export const CardName = styled.h5`
    color: var(--neutral100);
`;

export const ThemeTitle = styled.h4`
    color: var(--neutral100);
    font-weight: bold;
    padding: 10px 0;
`;