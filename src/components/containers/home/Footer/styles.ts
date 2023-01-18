import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--neutral100);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: var(--maxWidth); 
    margin: auto;    
    min-height: 550px;
    padding: 40px 0;

    @media (max-width: 768px) {
        min-height: 400px;
    }
`;

export const Group = styled.div`
    padding: 0 10px;
    text-align: center;
`;

export const Picture = styled.img`
    width: 100px;
    margin: auto;
`;

export const Title = styled.h1`
    line-height: 40px;
    margin-bottom: 0;
    color: var(--secondary10);

    @media (min-width: 768px) {
        line-height: 60px;
        font-size: 32pt;
    }
`;

export const Info = styled.div`
    padding: 10px 0 20px 0;    
`;

export const SubTitle = styled.h5`
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 25px;
    color: var(--secondary10);
    margin-top: 10px;

    @media (min-width: 768px) {
        line-height: 30px;
    }
`;

export const Actions = styled.div`
    width: 100%;
    text-align: left;
    
    button {
        font-size: 9pt;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 12px 20px;
    }

    @media (min-width: 768px) {
        button {
            padding: 15px 30px;
        }
    }
`;

export const FooterContainer = styled.h5`
    color: var(--secondary10);
    margin-top: 40px;
`;

export const Link = styled.a`
    color: var(--secondary10);
    font-size: 9pt;
`;