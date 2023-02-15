import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 10px;
    min-height: 100vH;
`;

export const Content = styled.div`
    
`;

export const Description = styled.h4`
    font-weight: normal;
    line-height: 30px;
`;

export const Options = styled.div`
    padding: 40px 0;
`;

export const Option = styled.div`
    padding: 60px 0;
    text-align: center;
`;

export const OptionDescription = styled.h4`
    padding: 20px 0;
    text-align: left;
`;

export const Picture = styled.img`
    max-width: 100%;
    width: 400px;
    
    &:hover {
        opacity: var(--opacity);
        cursor: pointer;
    }
`;

export const SubTitle = styled.h2`
    margin-top: 40px;
`;

export const Action = styled.div`
    padding: 20px 0;
    text-align: center;
`;

export const ActionDescription = styled.h4`
    font-weight: normal;
    margin-bottom: 20px;
`;

export const Link = styled.a`
`;