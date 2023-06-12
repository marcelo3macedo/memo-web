import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px 0;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  border: 1px solid var(--neutral90);
  border-radius: 5px;
  text-align: center;
  padding: 20px 0;
`;

export const Message = styled.h2`
  color: var(--neutral100);
`;
