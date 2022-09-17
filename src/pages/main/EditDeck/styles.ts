import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 10px;
    min-height: 100vH;
`;

export const SubTitle = styled.h5`
    color: var(--neutral90);
    font-weight: bold;
`;

export const Content = styled.div`
    
`;

export const Actions = styled.div`
    position: fixed;
    bottom: 65px;
    left: 0;
    width: 100%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-top: 2px solid var(--neutral50);

    @media (min-width: 768px) {
        position: relative;
    }
`;

export const Action = styled.div`
    width: 100%;
    background: var(--neutral30);
    padding: 10px 5px;
    text-align: center;
    
    button {
        width: 80%;
    }
`;

export const Finish = styled.div`
    text-align: right;
    margin-bottom: 10px;
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
        position: relative;
    }
`;

export const Title = styled.h2`
    color: var(--secondaryDark);
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
`;

export const Value = styled.input`
    margin: 20px 0 10px 0;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--neutral80);
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 10px 0;

    @media (min-width: 768px) {
        max-width: 500px;
    }
`;

export const PageTitle = styled.h5`
    color: var(--secondaryDark);
    font-weight: bold;    
`;

export const EditTitle = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    background: var(--secondaryDark);
    border-radius: 5px;

    svg path {
        fill: var(--neutral0);
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const EditText = styled.h5`
    padding: 0 10px;
    color: var(--neutral0);
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    input {
        margin-bottom: 5px;
        padding: 15px 10px;
        border-radius: 10px;
        border: 1px solid var(--neutral60);
    }
`;

export const FinishWrapper = styled.div`
    padding: 0 5px;
`;

export const Frequency = styled.div`
    @media (min-width: 768px) {
        max-width: 500px;
    }
`;

export const NewCard = styled.div`
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

export const Info = styled.div`
`;

export const Description = styled.h5`
    white-space: pre-line;
    color: var(--neutral90);
    margin: 10px 0;
`;
