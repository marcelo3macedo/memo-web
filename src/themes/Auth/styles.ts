import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE01_COLOR};
  height: 100vh;
  overflow-y: hidden;
`;

export const Content = styled.div`
  overflow: hidden;
  max-width: 800px;
  min-height: 500px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.LIGHT_COLOR};

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0px;
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
