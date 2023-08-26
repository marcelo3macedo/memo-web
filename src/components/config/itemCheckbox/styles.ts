import styled from 'styled-components';

export const Container = styled.div<any>`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;

  &:checked {
    accent-color: ${({ theme }) => theme.PALLETE03_COLOR};
  }
`;
