import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vH;
`;

export const Content = styled.div`
    padding: 0 10px;
`;

export const SubTitle = styled.h5`
    color: var(--neutral90);   
    margin-bottom: 5px;
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
    h3 {
        color: var(--neutral90);
    }

    svg path {        
        fill: var(--neutral90);
    }
`;

export const Action = styled.div`
    width: 50%;
    margin: 10px auto;

    button {
        width: 100%;
    }
`;

export const Themes = styled.div`
`;

export const ThemeTitle = styled.h5`
    color: var(--neutral90);
    font-weight: bold;
`;

export const Card = styled.div`
    border: 1px solid var(--neutral50);
    padding: 15px 20px;
    border-radius: 10px;
    margin: 10px 0;
`;

export const CardName = styled.h5`
    color: var(--neutral90);
`;