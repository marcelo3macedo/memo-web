import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 5px;
`;

export const TextValue = styled.h5`
  color: ${({ theme }) => theme.ALERT_COLOR};
  padding: 10px 5px;
  font-weight: normal;
`;
