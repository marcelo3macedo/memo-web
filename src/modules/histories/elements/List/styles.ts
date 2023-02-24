import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 0 10px 0;
`;

export const Content = styled.div`
    max-width: 100%;
`;

export const Header = styled.h6`
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--neutral100);
    font-weight: bold;
`;

export const HistoryArea = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;

    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export const History = styled.div`
    background: var(--neutral0);
    box-shadow: 0 0 1px 1px var(--neutral60);
    border-radius: 5px;
    padding: 20px 10px;
    max-width: 100%;
    margin-bottom: 20px;
`;

export const Title = styled.h5`
    color: var(--neutral100);
    padding: 5px;
`;

export const Info = styled.span`
    font-weight: bold;
`;
