import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 60px 0;
    max-width: 700px;
    margin: auto;

    @media (max-width: 768px) {
        padding: 20px 0 40px 0;
    }
`;

export const Content = styled.div`
    text-align: center;
    margin: auto;
`;

export const Title = styled.h2`
    color: var(--pallete03);
    padding: 10px 0;
`;