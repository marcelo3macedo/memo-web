import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 40px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;
    border-top: 1px solid #ccc;

    @media (min-width: 768px) {
        padding: 20px 10px;
        margin-bottom: 20px;
        height: 500px;
        overflow-y: scroll;
        align-items: start;
        flex-wrap: nowrap;
        flex-direction: column;
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