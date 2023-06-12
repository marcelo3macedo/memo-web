import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  &:hover {
    opacity: var(--opacity);
    cursor: pointer;
  }
`;

export const Title = styled.h5`
  font-style: italic;
  text-decoration: underline;
  padding-bottom: 20px;
`;
