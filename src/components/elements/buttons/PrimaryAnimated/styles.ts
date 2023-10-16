import { Button } from '@interfaces/elements/buttons/primary.interface';
import styled from 'styled-components';

export const Wrapper = styled.button<Button>`
  box-shadow: rgb(138, 42, 33) 3px 4px 0px 0px;
  background: linear-gradient(rgb(198, 45, 31) 5%, rgb(242, 68, 55) 100%)
    rgb(198, 45, 31);
  border-radius: 18px;
  border: 1px solid rgb(208, 39, 24);
  cursor: pointer;
  color: rgb(255, 255, 255);
  padding: 20px 60px;
  min-width: 150px;
  text-decoration: none;
  text-shadow: rgb(129, 14, 5) 0px 1px 0px;
  text-align: center;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.95;
  }
`;

export const Loading = styled.div`
  opacity: var(--alpha);
`;
