import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: linear-gradient(var(--secondary15), var(--secondary10));
    height: 100vH;
    padding: 40px 0;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Content = styled.div`
    overflow: hidden;
    max-width: 800px;
    min-height: 500px;
    margin: auto;
    margin-top: 55px;
    display: flex;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        border-radius: 0px;
    }
`;

export const Header = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--secondaryDark);

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 0;
        background: none;
    }
`;

export const Logo = styled.img`
    width: 150px;
    padding: 20px 0;

    @media (max-width: 768px) {
        width: 120px;
        padding: 10px 0;
    }
`;

export const Title = styled.h1`
    color: var(--secondaryDark);
    
    @media (min-width: 768px) {
        color: var(--neutral10);
    }
`;

export const Background = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;

    @media (min-width: 768px) {
        display: none;
    }
`;