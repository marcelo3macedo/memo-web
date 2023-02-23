import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;    
`;

export const Content = styled.div`
`;

export const Title = styled.h4`
`;

export const NotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vH;
`;

export const Description = styled.h4`
    color: var(--neutral100); 
    white-space: pre-line;  
    margin-bottom: 20px;
`;

export const Action = styled.div`
    width: 100%;
    margin: 30px 0;
    text-align: center;

    button {
        width: 450px;
        max-width: 100%;
        text-transform: uppercase;
    }
`;

export const TutorialArea = styled.div`
    margin: 40px 0;
    padding: 10px 0;
    border-top: 2px solid var(--neutral50);
`;