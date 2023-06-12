import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 0;
  margin-bottom: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
