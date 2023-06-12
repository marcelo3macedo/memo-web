import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg path {
    fill: var(--neutral90);
  }
`;

export const Title = styled.h4`
  padding: 10px 0;
`;

export const Actions = styled.div`
  padding: 10px 0;
`;
