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
    border-top: 2px solid var(--neutral60);
    padding: 10px 5px;

    svg { 
        fill: var(--neutral80);
    }
`;