import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid var(--neutral60);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Content = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
`;

export const Title = styled.h5`
    margin-left: 15px;
    color: var(--neutral90);
`;