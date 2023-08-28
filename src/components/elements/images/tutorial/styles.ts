import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;
`;

export const Picture = styled.img`
  display: flex;
  max-width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: inherit;
    margin: auto;
  }
`;
