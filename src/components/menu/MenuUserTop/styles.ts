import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 0;
`;

export const Info = styled.div`
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
`;

export const Option = styled.div`
    padding: 0 10px;

    svg path {
        fill: var(--neutral80);
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;