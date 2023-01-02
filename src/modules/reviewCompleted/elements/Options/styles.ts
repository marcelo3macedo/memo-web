import styled from "styled-components";

export const Wrapper = styled.div`        
    width: 100%;
`;

export const Content = styled.div`
    text-align: center;
    display: flex;
    padding: 0 40px;

    @media (max-width: 768px) {
        padding: 0;
        flex-wrap: wrap;
    }
`;

export const Option = styled.div`
    flex: 50%;
    padding: 10px 0;
`;

export const Title = styled.h3`
    font-weight: normal;
    padding: 5px 0;
`;

export const Quantity = styled.h1`
    
`;
