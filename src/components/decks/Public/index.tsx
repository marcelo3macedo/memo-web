import IconSmall from '@components/icons/IconSmall';
import { openAction } from '@store/modules/deck/open/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  Title,
  Header,
  Details,
  Status,
  StatusTitle,
} from './styles';

export default function Public({ deck }) {
  const dispatch = useDispatch();

  if (!deck) {
    return <></>;
  }

  function openDeckClick() {
    dispatch(openAction({ deck: deck }));
  }

  return (
    <Wrapper className='no-select' onClick={openDeckClick}>
      <Content>
        <Header>
          <Title>{deck.name}</Title>
        </Header>
        <Details>
          <Status>
            <IconSmall name='card' />
            <StatusTitle>{deck.cardsCount}</StatusTitle>
          </Status>
        </Details>
      </Content>
    </Wrapper>
  );
}
