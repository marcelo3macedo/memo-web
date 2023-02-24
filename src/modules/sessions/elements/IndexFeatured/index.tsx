import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import IIndexActiveSessions from '@modules/sessions/dtos/IIndexActiveSessions';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';
import { navigateTo } from '@store/mods/featured/actions';

export default function IndexFeatured({ session }:IIndexActiveSessions) {
  const dispatch = useDispatch()
  const { deck } = session || {}

  function featuredClick() {
    dispatch(navigateTo({ deckId: deck.id }))
  }

  return (
    <Wrapper onClick={featuredClick}>
      <Content>
        <Card>
          <Header>
            <Title>{ deck.name }</Title>
          </Header>
          <Footer>
            <IconNamed icon={'card'} title={deck.cardsCount} />
          </Footer>
        </Card>
        <Action className='hidden-action'>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}