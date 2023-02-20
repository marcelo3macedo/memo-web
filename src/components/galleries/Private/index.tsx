import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import Detail from '@components/sessions/Detail';
import { openAction } from '@store/mods/modals/actions';

import { Wrapper, Content, Action, Header, Info, Title, Footer } from './styles';
import { SESSIONMODAL_EDITDECK } from '@constants/SessionModal';
import { setAction } from '@store/mods/decks/actions';

export default function Private({ session }) {
  const dispatch = useDispatch();
  const { frequency } = session || {}
  const { name: frequencyName } = frequency || {}

  function openClick() {
    dispatch(setAction({ deck: session }))
    dispatch(openAction({ name: SESSIONMODAL_EDITDECK }));
  }

  return (
    <Wrapper className='no-select'>
      <Content onClick={openClick}>
        <Info>
          <Header>
            <Title>{ session.name }</Title>
          </Header>
          <Footer>
            <Detail icon={'card'} title={ session.cardsCount } />
            <Detail icon={'time'} title={ frequencyName } />
          </Footer>
        </Info>
        <Action className='hidden-action'>
          <IconMedium name={"next"} />
        </Action>        
      </Content>
    </Wrapper>
  );
}