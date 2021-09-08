import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Content = styled.div`
    padding: 10px 0;
`;

export const Title = styled.h1`
    color: var(--neutral90);

    @media (min-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const Paragraph = styled.h5`
    padding: 10px 0;
    line-height: 20px;
    color: var(--neutral90);

    @media (min-width: 768px) {
        line-height: 24px;
        font-size: 11pt;
    }
`;

