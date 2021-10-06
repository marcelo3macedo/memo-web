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

export const Finish = styled.div`
    text-align: right;
    margin-bottom: 10px;
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
`;

export const Title = styled.h1`
    color: var(--neutral90);
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
    align-items: center;
    justify-content: space-between;
`;

export const Action = styled.div`
    width: 50%;
    margin: 10px auto;

    button {
        width: 100%;
    }
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

export const NewCard = styled.div`
    padding: 20px 0;

    button {
        width: 100%;
        max-width: 100%;
    }
`;