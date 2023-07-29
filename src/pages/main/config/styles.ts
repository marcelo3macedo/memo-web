import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  max-width: 800px;
`;

export const Infos = styled.div``;

export const Items = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Item = styled.div`
  padding: 20px 0;
`;

export const Block = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const BlockSmall = styled.div`
  padding: 20px;
  max-width: 350px;
`;
