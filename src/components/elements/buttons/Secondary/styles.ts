import { Button } from '@interfaces/elements/buttons/primary.interface';
import styled from 'styled-components';

export const Wrapper = styled.button<Button>`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.PALLETE02_COLOR};
  border: none;
  min-width: 100px;
  width: 100%;
  text-align: center;
  opacity: ${props => (props.disabled ? 'var(--alpha)' : 1)};

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

  svg {
    circle {
      stroke: #fff;
    }
  }

  &:active {
    opacity: var(--alpha);
  }
`;

export const TextValue = styled.h3`
  padding: 5px 0;
  color: ${({ theme }) => theme.LIGHT_COLOR};
`;

export const Loading = styled.div`
  opacity: var(--alpha);
`;
