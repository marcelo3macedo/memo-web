import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--warm01);
  background: linear-gradient(
    0deg,
    var(--warm30) 0%,
    var(--warm30) 50%,
    var(--warm01) 100%
  );
  color: var(--textSecondary100);
  border: none;
  min-width: 100px;
  text-align: center;

  h5 {
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    border: none;
  }

  &:active {
    opacity: var(--alpha);
  }
`;

export const TextValue = styled.h5``;

export const Loading = styled.div`
  opacity: var(--alpha);
`;
