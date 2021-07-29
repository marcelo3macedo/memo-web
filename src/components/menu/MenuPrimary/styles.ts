import styled from "styled-components";

type WrapperProps = {
    show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vH;
    background: rgba(var(--alphaColor), var(--alpha));
    z-index: 999;
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
    width: 70%;
    background: var(--secondary10);
    height: 100vH;
`;

export const Header = styled.div`    
    text-align: center;
    padding: 20px 0;
    padding: 10px;
    border-bottom: 1px solid var(--neutral60);
    background: var(--secondary100);
`;

export const Logo = styled.img`
    width: 125px;
    padding: 10px 0;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const Title = styled.h3`
    color: var(--textSecondary100);
`;

export const Options = styled.div`
    padding: 10px;
`;