import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: 0 0 2px 0px var(--neutral80);
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const Info = styled.div`
`;

export const Options = styled.div`
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;