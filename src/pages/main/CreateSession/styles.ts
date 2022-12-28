import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 10px;
    min-height: 100vH;

    @media (min-width: 768px) {
        max-width: 700px;
    }
`;

export const Content = styled.div`
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    @media (min-width: 768px) {
        button {
            max-width: 250px;
        }
    }
`;

export const Group = styled.label`
    display: flex;
    align-items: center;
    padding: 10px 0;
`;

export const RadioArea = styled.div`
    display: flex;
`;

export const RadioIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 0 5px;

    svg {
        fill: var(--neutral100);        
    }
`;

export const RadioInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
`;

export const RadioTitle = styled.h5`
    color: var(--neutral100);
`;

export const RadioDescription = styled.h5`
    color: var(--neutral100);
`;

export const ComboArea = styled.div`
    padding: 10px 0;
    width: 100%;

    select {
        margin-top: 10px;
        width: 100%;
        color: var(--neutral100);
        background: var(--neutral0);
        border: none;
    }
`;

export const ComboTitle = styled.h4`
    color: var(--neutral100);
`;


export const FinishArea = styled.div`
    margin-top: 20px;
    width: 100%;

    button {
        width: 100%;
    }
`;

export const InputText = styled.h5`
    font-weight: bold;    
`;