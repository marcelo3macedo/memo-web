import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 10px 0;
    }
`;

export const Content = styled.div`
    display: inline-flex;
    padding-bottom: 5px;
`;