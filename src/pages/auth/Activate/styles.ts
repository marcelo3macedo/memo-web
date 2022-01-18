import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 40px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {        
        width: 100%;
        max-width: 450px;
        margin: auto;
        padding: 0px;
        display: block;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    heigth: 100%;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

export const SubTitle = styled.h4`
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

