import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const BackAction = styled.div`
  padding: 10px 0;
`;

export const Breadcrumb = styled.div`
  padding: 10px 0;
`;

export const Title = styled.div`
  padding: 20px 0;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const FooterText = styled.div`
  padding: 0 10px;
`;
