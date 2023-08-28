import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Content = styled.div``;

export const Info = styled.div`
  padding: 20px 0 10px 0;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsBlock = styled.div`
  padding-top: 20px;
  text-align: center;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const Actions = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 10px 0;
    margin: auto;
  }
`;

export const Action = styled.div`
  padding: 0 10px;
  width: 100%;
`;
