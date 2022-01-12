import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--pastelGray);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px; 
    margin: auto;    
    min-height: 550px;

    @media (max-width: 768px) {
        min-height: 400px;
    }
`;

export const Group = styled.div`
    padding: 0 10px;
`;

export const Picture = styled.img`
    max-width: 450px;
    opacity: 0.4;

    @media (max-width: 768px) {
        position: absolute;
        right: 0;
        margin-top: -25%;
        opacity: 0.2;
        max-width: 50%;
    }
`;

export const Title = styled.h1`
    line-height: 40px;
    margin-bottom: 0;
    color: var(--warm80);

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

    @media (min-width: 768px) {
        line-height: 30px;
        font-size: 14pt;
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
