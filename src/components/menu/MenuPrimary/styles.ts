import styled from "styled-components";

type WrapperProps = {
    show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    background: var(--neutral0);
    width: 30%;
    
    @media (max-width:768px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vH;
        background: rgba(var(--alphaColor), var(--alpha));
        z-index: 999;
        display: ${props => props.show ? "block": "none"};
    }    
`;

export const Content = styled.div`
    width: 70%;
    height: 100%;
    background: var(--neutral30);
    box-shadow: 0 0 2px 2px var(--neutral60);
    text-align: center; 

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const Header = styled.div`    
    text-align: center;
    padding: 30px 10px;
    display: flex;

    svg path:last-child {
        fill: var(--neutral50);
    }
`;

export const Picture = styled.img`
    max-width: 100px;
    padding: 10px 0;
    text-align: center;
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
    text-transform: lowercase;
    letter-spacing: 1px;
`;

export const Options = styled.div`
    padding: 0 10px;
`;

export const User = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: initial;
    text-align: initial;
`;

export const Username = styled.h4`
    font-weight: bold;
    color: var(--neutral50);
`;

export const Logout = styled.h5`
    color: var(--neutral50);
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;

export const OptionTitle = styled.h5`
    color: var(--neutral50);
    text-transform: uppercase; 
    font-weight: bold;
    padding: 10px 0;
    margin-top: 10px;
    text-align: left;
`;

export const LogoArea = styled.div`
    padding: 10px 0;
`;