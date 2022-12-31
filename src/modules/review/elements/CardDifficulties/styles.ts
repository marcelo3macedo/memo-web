import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;     
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }    
`;

export const Message = styled.h4`
    width: 100%;
    padding: 0px 0 20px 0;
    color: var(--primary);
    font-weight: normal;
`;

export const Info = styled.h5`
    width: 100%;
    padding: 40px 0 0px 0;
    color: var(--primary);
    font-style: italic;    
`;

export const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    background: var(--neutral50);
    min-width: 150px;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        margin: 5px 0;
        width: 100%;
    }
`;

export const ActionValue = styled.h4`
    padding: 5px;
    letter-spacing: 1px;
    color: var(--primary);
`;