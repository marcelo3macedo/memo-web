import styled from "styled-components";

export const Wrapper = styled.div`
    
`;

export const Content = styled.div`
    padding: 10px;
    text-align: center;
    margin: auto;
`;

export const Title = styled.h4`
    font-weight: bold;
    color: var(--secondaryDark);
`;

export const AddArea = styled.div`
    padding: 10px 0;
    max-width: 50%;
    margin: auto;
`;

export const Actions = styled.div`
    padding-top: 20px;
    
    button {
        width: 250px;
    }

    @media (min-width: 768px) {
        button {
            width: 300px;

            h5 {
                font-size: 10pt;
            }
        }
    }
`;
