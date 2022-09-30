import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;
`;

export const Content = styled.div`
`;

export const Frequency = styled.div`
    @media (min-width: 768px) {
        max-width: 500px;
    }
`;

export const Action = styled.div`
    padding: 10px 0;
    text-align: center;

    button {
        width: 80%;
    }    
    
    @media (min-width: 768px) {
        max-width: 500px;
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