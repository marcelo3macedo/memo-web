import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border: 1px solid ${({ theme }) => theme.GRAY_COLOR};
  border-radius: 20px;
  padding: 20px;
  margin: 40px 0;
`;
