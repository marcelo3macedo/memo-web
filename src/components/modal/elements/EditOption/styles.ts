import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 0;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h4`
  color: var(--neutral100);
`;

export const Action = styled.div`
  padding: 10px 0;
  width: 100%;

  button {
    width: 100%;
    margin: 10px 0;
  }

  &.edit button {
    background: var(--neutral50);
  }
`;
