import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 90vH;
    max-width: 100%;
    overflow: hidden;
`;

export const Content = styled.div`    
    
`;

export const Section = styled.div`
    @media (min-width: 768px) {
        max-width: var(--maxWidth);
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: var(--secondary15);
    }
`;

export const Body = styled.div`
    padding: 0 10px;

    @media (min-width: 768px) {
        display: flex;
        width: 100%;
        padding: 0;      
    }
`;

export const PageContainer = styled.div`
    @media (min-width: 768px) {
        padding: 0 20px;        
    }
`;

export const PageWrapper = styled.div`
    @media (min-width: 768px) {
        width: 100%;
    }
`;

