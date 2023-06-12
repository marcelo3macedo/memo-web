import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  border-radius: 5px;
  background: var(--neutral50);
  min-width: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const TextValue = styled.h5`
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--neutral100);
  padding: 0 10px;
`;

export const Loading = styled.div`
  opacity: var(--alpha);
`;
