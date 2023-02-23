import styled from "styled-components";

export const Wrapper = styled.div`    
    padding: 10px 0;
`;

export const Content = styled.div`
    width: 100%;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    background: var(--neutral50);

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.h5`
    padding: 0;
    text-align: center;
    width: 100%;
`;

export const Action = styled.div`
    padding: 10px 20px;
    text-align: center;
    width: 100%;
`;