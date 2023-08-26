import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const Footer = styled.div`
  background: ${({ theme }) => theme.NEUTRAL90};
  padding 20px 0;
`;

export const Copyright = styled.div`
  text-align: center;
`;

export const CopyrightMessage = styled.h5`
  color: ${({ theme }) => theme.LIGHT_COLOR};
`;
