import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }
`;

export const Content = styled.h6`
  font-weight: bold;
  text-transform: uppercase;
  color: var(--neutral100);
`;
