import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 0 40px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Options = styled.div`
  width: 100%;
  padding: 0 10px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;
