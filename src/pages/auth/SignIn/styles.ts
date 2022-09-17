import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 40px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--neutral0);

    @media (max-width: 768px) {
        width: 100%;
        max-width: 450px;
        margin: auto;
        padding: 0px;
        display: block;
        background: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    heigth: 100%;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

export const Fields = styled.div`
    
`;

export const ActionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    padding: 15px 0;

    button {
        width: 100%;
        margin-top: 20px;
    }
`;

export const NewUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

export const FormArea = styled.div`
    background: #fff;
    padding: 20px;
`;

export const InputText = styled.h6`
    font-weight: bold;    
`;

export const InfoText = styled.h4`
    padding: 0 5px;
`;

export const InfoFeaturedText = styled.h4`
    padding: 0 5px;
    color: var(--secondaryDark);
    font-weight: bold;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;