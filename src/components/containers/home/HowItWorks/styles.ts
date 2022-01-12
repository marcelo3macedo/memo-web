import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--pastelBlue);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; 
    width: 100%;
    max-width: 1100px; 
    margin: auto;    
    min-height: 1000px;

    @media (max-width: 768px) {
        min-height: 800px;
    }
`;

export const Group = styled.div`
    padding: 0 10px;
    text-align: center;
`;

export const Title = styled.h1`
    line-height: 40px;
    text-align: center;
    margin-bottom: 0;
    color: var(--neutral100);

    @media (min-width: 768px) {
        line-height: 60px;
        font-size: 32pt;
    }
`;

export const TitleArea = styled.div`
    padding: 20px 10px;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

export const Item = styled.div`
    width: 50%;
`;

export const ItemArea = styled.div`
    padding: 15px;
`;

export const Picture = styled.img`
    max-width: 100%;
    padding: 20px 0;

    @media (min-width: 768px) {
        max-width: 600px;        
    }
`;

export const ItemTitle = styled.h3`
    color: var(--blue80);  

    @media (min-width: 768px) {
        font-size: 18pt;
        margin-top: 10px;
    }  
`;

export const ItemDescription = styled.h5`
    color: var(--neutral100);
    margin-top: 5px; 

    @media (min-width: 768px) {
        font-size: 14pt;
        margin-top: 10px;
    }   
`;