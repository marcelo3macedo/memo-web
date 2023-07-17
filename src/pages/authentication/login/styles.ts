import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 40px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

export const Fields = styled.div`
  padding: 20px 0;
`;

export const Row = styled.div`
  padding: 10px 0;
`;

export const RowRight = styled.div`
  padding: 10px 0;
  text-align: right;
`;
