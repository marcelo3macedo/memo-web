import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_COLOR};
  line-height: 25px;
  padding-top: 20px;
`;
