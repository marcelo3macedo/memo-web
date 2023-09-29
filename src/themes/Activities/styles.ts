import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE01_COLOR};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  width: 700px;
  max-width: 100%;
  padding: 25px;
  border-radius: 20px;
  box-sizing: border-box;
`;
