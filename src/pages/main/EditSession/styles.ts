import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;
`;

export const Content = styled.div`
    padding: 20px 0;
`;

export const Frequency = styled.div`
    @media (min-width: 768px) {
        max-width: 500px;
    }
`;

export const Action = styled.div`
    padding: 10px 0;
    text-align: center;
    display: flex;
    
    button {
        width: 80%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 100%;
    }
`;

export const ActionButton = styled.div`
    padding: 20px;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0;
        margin: 10px 0;

        button {
            width: 100%;
        }
    }
`;

export const FrequencyTitle = styled.h5`
    color: var(--neutral100);
    margin-top: 10px;
    font-weight: bold;
`;

export const FrequencyOptions = styled.select`
    margin: 5px 0;
    padding: 10px 10px;
    width: 100%;
    color: var(--neutral90);
    background: var(--neutral0);
    border: none;
`;

export const Modals = styled.div`
`;