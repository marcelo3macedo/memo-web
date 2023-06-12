import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10px;
  min-height: 100vh;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  color: var(--secondaryDark);

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Paragraph = styled.h4`
  padding: 10px 0;
  line-height: 20px;
  color: var(--neutral100);

  @media (min-width: 768px) {
    line-height: 32px;
  }
`;

export const Footer = styled.div`
  text-align: center;
  padding: 40px 0 120px 0;
`;

export const Picture = styled.img`
  max-width: 100%;
  width: 600px;
`;
