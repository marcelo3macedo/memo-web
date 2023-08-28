import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
`;

export const Picture = styled.img`
  display: flex;
  max-width: 100%;
  height: 200px;

  @media (max-width: 768px) {
    height: 150px;
    margin: auto;
  }
`;
