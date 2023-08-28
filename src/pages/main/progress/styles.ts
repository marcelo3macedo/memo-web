import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  max-width: 800px;
`;

export const Items = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;

export const Item = styled.div`
  padding: 20px 0;
`;

export const Row = styled.div`
  padding: 20px;
`;

export const RowFlex = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
