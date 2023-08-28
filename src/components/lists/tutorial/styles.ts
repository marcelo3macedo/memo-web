import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.LIGHT_COLOR};
  border 2px solid ${({ theme }) => theme.GRAY_COLOR};
`;
