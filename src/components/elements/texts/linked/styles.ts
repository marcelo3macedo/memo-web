import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    opacity: var(--alpha);
  }
`;

export const TextValue = styled.h4`
  font-style: italic;
  color: ${({ theme }) => theme.NEUTRAL90};
`;
