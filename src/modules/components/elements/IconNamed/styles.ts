import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      fill: var(--neutral80);
    }
  }
`;

export const Title = styled.h5`
  color: var(--neutral80);
  padding: 0 5px;
`;
