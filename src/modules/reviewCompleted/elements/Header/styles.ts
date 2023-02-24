import styled from "styled-components";

export const Wrapper = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    text-align: center;
`;


export const Title = styled.h1`
    color: var(--primary);
    padding: 5px 0;  
`;

export const SubTitle = styled.h3`
    color: var(--primary);
    font-weight: normal;
    padding: 5px 0;  
`;

export const Name = styled.h1`
    color: var(--primary);
    padding: 5px 0;  
`;

export const Image = styled.img`
    max-width: 200px;
    padding: 0 0 0 40px;

    @media (max-width: 768px) {
        max-width: 200px;
        padding: 0 0 0 20px;
    }
`;