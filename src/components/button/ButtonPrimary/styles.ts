import { Button } from '@interfaces/Button/button.interface';
import styled from 'styled-components';

export const Wrapper = styled.button<Button>`
  padding: 15px 20px;
  border-radius: 5px;
  background: var(--pallete03);
  color: var(--textSecondary100);
  border: none;
  min-width: 100px;
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

export const TextValue = styled.h5`
  color: var(--neutral10);
  letter-spacing: 1px;
  font-weight: bold;
`;

export const Loading = styled.div`
  opacity: var(--alpha);
  width: 100%;
`;
