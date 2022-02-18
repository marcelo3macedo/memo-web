import styled from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: 768px) {
        padding-top: 100px;
    }
`;

export const Content = styled.div`
`;

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
`;

export const Footer = styled.div`
    background: var(--neutral100);
    padding 10px 0;
`;

export const Copyright = styled.div`
    text-align: center;
`;

export const CopyrightMessage = styled.h5`
    color: var(--neutral10);
`;