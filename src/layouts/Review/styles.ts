import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--pallete02);
    min-height: 100vH;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    padding: 40px 0;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Section = styled.div`
`;