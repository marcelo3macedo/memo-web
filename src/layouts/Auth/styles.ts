import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: linear-gradient(var(--secondary80), var(--secondary60));
    height: 100vH;
    padding: 40px 0;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Content = styled.div`
    background: var(--secondary10);
    border-radius: 10px;
    overflow: hidden;
    max-width: 800px;
    min-height: 500px;
    margin: auto;
    display: flex;
    box-shadow: 0 0 5px -1px rgb(0 0 0 / 40%);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Header = styled.div`
    width: 50%;
    background: var(--secondary100);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 0;
    }
`;

export const Logo = styled.img`
    width: 150px;
    padding: 20px 0;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const Title = styled.h1`
    color: var(--textSecondary100);
`;