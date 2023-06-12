import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: auto;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin: auto;
`;

export const Title = styled.h3`
  color: var(--secondaryDark);
  padding: 5px 0;
`;
