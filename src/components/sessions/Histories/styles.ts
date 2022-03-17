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
    color: var(--neutral90);
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
    border: 1px solid var(--neutral90);
    padding: 12px 10px;
    max-width: 100%;
    margin-bottom: 10px;
`;

export const Title = styled.h5`
    color: var(--neutral90);
`;

export const Info = styled.span`
    font-weight: bold;
`;
