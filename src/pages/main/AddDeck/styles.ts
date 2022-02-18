import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    min-height: 100vH;

    @media (min-width: 768px) {
        max-width: 700px;
    }
`;

export const Content = styled.div`
    padding: 10px 0;
`;

export const Title = styled.h1`
    color: var(--neutral90);
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;

    input[type="text"] {
        margin: 20px 0 10px 0;
        padding: 15px 10px;
        border-radius: 10px;
        border: 1px solid var(--neutral60);
    }

    textarea {
        background: none;
        margin: 10px 0 10px 0;
        height: 60px;
        padding: 15px 10px;
        border-radius: 10px;
        border: 1px solid var(--neutral60);
    }

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
        fill: var(--neutral90);        
    }
`;

export const RadioInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
`;

export const RadioTitle = styled.h5`
    color: var(--neutral90);
`;

export const RadioDescription = styled.h6`
    color: var(--neutral90);
`;

export const ComboArea = styled.div`
    padding: 10px 0;
    width: 100%;

    select {
        margin-top: 10px;
        width: 100%;
        color: var(--neutral90);
    }
`;

export const ComboTitle = styled.h4`
    color: var(--neutral90);
`;


export const FinishArea = styled.div`
    margin-top: 20px;
    width: 100%;

    button {
        width: 100%;
    }
`;
