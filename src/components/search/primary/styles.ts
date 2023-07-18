import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  width: 100%;
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
  width: 90%;
  margin: auto;
  max-width: 450px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
`;

export const SearchIcon = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
`;
