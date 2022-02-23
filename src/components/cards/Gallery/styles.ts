import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 40px;
    display: inline-block;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid #ccc;

    @media (min-width: 768px) {
        margin-bottom: 20px;
        display: block;        
    }
`;

export const Title = styled.h3`
    padding: 5px 0;
    color: var(--neutral90);
`;

export const Message = styled.h5`
    padding: 5px 0;
    color: var(--neutral90);
    width: 100%;
`;