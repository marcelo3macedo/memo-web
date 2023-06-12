import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Description = styled.h3`
  color: var(--neutral100);
  white-space: pre-line;
  margin: 10px 0 40px 0;
`;

export const Action = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 10px auto;

  button {
    width: 100%;
  }
`;

export const Share = styled.div`
  padding: 20px 0;
`;
