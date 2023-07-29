import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Content = styled.div`
  width: 70%;
  height: 100vh;
  background: var(--neutral10);

  @media (min-width: 768px) {
    max-width: 300px;
    width: 100%;
  }
`;

export const Block = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Header = styled.div`
  padding: 10px 0;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

export const Options = styled.div`
  padding: 0 10px;
`;
