import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const Content = styled.div`
    min-height: 500px;
    padding: 0 40px;
    text-align: center;
    background: var(--neutral0);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.h3`
    color: var(--primary);
    font-weight: normal;
`;

export const Message = styled.h1`
    color: var(--primary);
`;