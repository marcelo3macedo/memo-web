import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid var(--neutral50);
  margin: 0 0 15px 0;
  padding: 20px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background: var(--neutral50);
  }
`;

export const Content = styled.div``;

export const Title = styled.h3`
  padding: 5px 0;
  font-weight: bold;
`;

export const Description = styled.h4`
  padding: 5px 0;
  color: var(--neutral100);
`;
