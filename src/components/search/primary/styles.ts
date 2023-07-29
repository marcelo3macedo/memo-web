import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 5px 0;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  input {
    width: 100%;
  }
`;

export const Search = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--neutral60);
  border-radius: 10px;
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border: 1px solid ${({ theme }) => theme.GRAY_COLOR};
`;

export const SearchIcon = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
`;
