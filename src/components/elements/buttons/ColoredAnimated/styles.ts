import { Button } from '@interfaces/elements/buttons/primary.interface';
import styled from 'styled-components';

export const Green = styled.button<Button>`
  box-shadow: rgb(61, 194, 27) 3px 4px 0px 0px;
  background: linear-gradient(rgb(68, 199, 103) 5%, rgb(92, 191, 42) 100%)
    rgb(68, 199, 103);
  border: 1px solid rgb(24, 171, 41);
  color: rgb(255, 255, 255);
  text-shadow: rgb(47, 102, 39) 0px 1px 0px;
  border-radius: 18px;
  padding: 20px 60px;
  width: 100%;
  text-decoration: none;
  text-shadow: rgb(129, 14, 5) 0px 1px 0px;
  text-align: center;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.95;
    cursor: pointer;
  }
`;

export const Yellow = styled.button<Button>`
  box-shadow: rgb(255, 246, 175) 3px 4px 0px 0px;
  background: linear-gradient(rgb(255, 236, 100) 5%, rgb(255, 171, 35) 100%)
    rgb(255, 236, 100);
  border: 1px solid rgb(255, 170, 34);
  text-shadow: rgb(255, 238, 102) 0px 1px 0px;
  border-radius: 18px;
  padding: 20px 40px;
  width: 100%;
  text-decoration: none;
  text-shadow: rgb(129, 14, 5) 0px 1px 0px;
  text-align: center;

  h3 {
    color: rgb(51, 51, 51);
    font-weight: normal;
  }

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.95;
    cursor: pointer;
  }
`;

export const Red = styled.button<Button>`
  box-shadow: rgb(242, 156, 147) 3px 4px 0px 0px;
  background: linear-gradient(rgb(254, 26, 0) 5%, rgb(206, 1, 0) 100%)
    rgb(254, 26, 0);
  border: 1px solid rgb(216, 53, 38);
  color: rgb(255, 255, 255);
  text-shadow: rgb(178, 62, 53) 0px 1px 0px;
  border-radius: 18px;
  padding: 20px 60px;
  width: 100%;
  text-decoration: none;
  text-shadow: rgb(129, 14, 5) 0px 1px 0px;
  text-align: center;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.95;
    cursor: pointer;
  }
`;

export const Loading = styled.div`
  opacity: var(--alpha);
`;
