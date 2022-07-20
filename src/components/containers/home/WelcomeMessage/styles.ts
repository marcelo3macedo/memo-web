import styled from "styled-components";

export const Wrapper = styled.div`
    height: 250px;

    @media (min-width: 768px) {
        height: inherit;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 768px) {
        align-items: initial;
    }
`;

export const Title = styled.h1`
    color: var(--neutral0);
    
    @media (min-width: 768px) {
        color: var(--secondaryDark);
    }
`;

export const Message = styled.h4`
    color: var(--neutral100);

    @media (max-width: 768px) {
        display: none;
    }
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
    padding: 10px 0;

    .desktop {
        display: none;
    }

    @media (min-width: 768px) {
        .desktop {
            display: block;
            width: 100%;
            max-width: inherit;
        }

        .mobile {
            display: none;
        }
    }
`;

export const Picture = styled.img`
    width: 100px;
    
    @media (min-width: 768px) {
        display: none;
    }
`;