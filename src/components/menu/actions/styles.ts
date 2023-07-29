import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const Item = styled.div`
  width: 50%;
`;
