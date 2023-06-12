import { AddDeck } from '@interfaces/Deck/addDeck.interface';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 0;
`;

export const Content = styled.div<AddDeck>`
  display: flex;
  align-items: center;
  background: ${props =>
    props.theme === 'default' ? 'var(--secondary15)' : 'var(--neutral0)'};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 0 1px 1px var(--neutral60);

  svg {
    padding: 8px;
  }

  input {
    padding: 10px 5px;
    border: none;
    color: var(--neutral100);
    background: none;
    width: 100%;
    font-size: 12pt;

    &::placeholder {
      color: var(--neutral60);
    }
  }

  span {
    font-size: 8pt;
    text-align: right;
    color: var(--alert);
  }
`;
