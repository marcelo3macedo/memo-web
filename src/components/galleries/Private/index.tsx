import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import Detail from '@components/sessions/Detail';
import { setTargetAction } from '@store/modules/deck/edit/actions';

import { Wrapper, Content, Action, Header, Info, Title, Footer } from './styles';

export default function Private({ session }) {
  const dispatch = useDispatch();
  const { frequency } = session || {}
  const { name: frequencyName } = frequency || {}

  function openAction() {
    dispatch(setTargetAction({ target: session }));
  }

  return (
    <Wrapper className='no-select'>
      <Content onClick={openAction}>
        <Info>
          <Header>
            <Title>{ session.name }</Title>
          </Header>
          <Footer>
            <Detail icon={'card'} title={ session.cardsCount } />
            <Detail icon={'time'} title={ frequencyName } />
          </Footer>
        </Info>
        <Action>
          <IconMedium name={"next"} />
        </Action>        
      </Content>
    </Wrapper>
  );
}