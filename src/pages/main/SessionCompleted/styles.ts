import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Content = styled.div`
    padding: 10px 0;
`;

export const Actions = styled.div`
    padding: 20px 0; 

    @media (min-width: 768px) {
        max-width: 400px;
        margin: auto;
    }
`;

export const Resume = styled.div`
    padding: 15px 0;
`;

export const ResumeTitle = styled.h3`
    color: var(--neutral90);
`;

export const ResumeItem = styled.div`    
    @media (min-width: 768px) {
        display: flex;

        div {
            width: 25%;
            display: flex;
            align-items: center;
        }
    }
`;