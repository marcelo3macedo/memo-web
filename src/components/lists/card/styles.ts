import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 0;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border: 2px solid ${({ theme }) => theme.GRAY_COLOR};
  padding: 15px 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Description = styled.div`
  padding: 20px 0 0 0;

  @media (max-width: 768px) {
    padding: 10px 0 0 0;
  }
`;

export const Action = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
