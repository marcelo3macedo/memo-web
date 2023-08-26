import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextValue = styled.div`
  color: ${({ theme }) => theme.NEUTRAL90};
  padding: 0 10px;
`;
