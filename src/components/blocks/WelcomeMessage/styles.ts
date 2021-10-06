import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Content = styled.div`
`;

export const Title = styled.h1`
    color: var(--neutral90);
`;

export const Message = styled.h4`
    padding: 5px 0;
    color: var(--neutral90);
`;

export const Banner = styled.img`
    width: 100%;
    padding-top: 10px;

    @media (min-width: 768px) {
        max-width: 400px;
        padding-top: 20px;
    }
`;

export const BannerArea = styled.h4`
    text-align: center;
`;