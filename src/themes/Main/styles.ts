import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: baseline;
    display: block;
  }
`;

export const Page = styled.div`
  max-width: 100%;
  min-height: 100%;
  padding: 0px 40px;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

export const Header = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALLETE02_COLOR};

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
    background: none;
  }
`;

export const Footer = styled.div``;
