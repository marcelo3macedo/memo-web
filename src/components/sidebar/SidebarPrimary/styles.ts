import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: var(--secondary10);

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 2px solid var(--neutral50);
    padding: 10px 5px;

    svg { 
        fill: var(--neutral60);
    }
`;

export const Item = styled.div`
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &.active {
        svg {
            fill: var(--secondary100);
        }

        h6 {
            color: var(--secondary100);
        }
    }
`;

export const Title = styled.h6`
    margin-top: 2px;
    color: var(--neutral60);
    font-weight: bold;
`;