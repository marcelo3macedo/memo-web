import { Button } from '@interfaces/elements/buttons/primary.interface';
import styled from 'styled-components';

export const Wrapper = styled.button<Button>`
  box-shadow: rgb(255, 255, 255) 3px 4px 0px 0px;
  background: linear-gradient(rgb(237, 237, 237) 5%, rgb(223, 223, 223) 100%)
    rgb(237, 237, 237);
  border: 1px solid rgb(220, 220, 220);
  color: rgb(51, 51, 51);
  text-shadow: rgb(255, 255, 255) 0px 1px 0px;
  cursor: pointer;
  border-radius: 30px;
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
