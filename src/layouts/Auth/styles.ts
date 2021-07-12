import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: linear-gradient(var(--secondary80), var(--secondary60));
    height: 100vH;
    padding: 40px 0;
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
`;

export const Header = styled.div`
    width: 45%;
    background: var(--secondary100);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    width: 100px;
    padding: 20px 0;
`;

export const Title = styled.h1`
    color: var(--textSecondary100);
`;