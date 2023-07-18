import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 50%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Box = styled.div`
  padding: 5px;
  width: 100%;
`;

export const Headers = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border-color: ${({ theme }) => theme.GRAY_COLOR};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;