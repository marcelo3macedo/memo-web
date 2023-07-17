import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
  min-width: 300px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Item = styled.div`
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
