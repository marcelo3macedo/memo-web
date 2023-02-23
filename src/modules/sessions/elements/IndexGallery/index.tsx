import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import IIndexGallerySessions from '@modules/sessions/dtos/IIndexGallerySessions';
import { redirectAction } from '@store/mods/decks/actions';

import { Wrapper, Content, Header, Title, Description, Footer, Card, Action, Group } from './styles';

export default function IndexGallery({ session }:IIndexGallerySessions) {
  const dispatch = useDispatch()

  function sessionClick() {
    const { id, path } = session || {}
    dispatch(redirectAction({ id, path }))
  }

  return (
    <Wrapper onClick={sessionClick}>
      <Content className='no-select'>
        <Card>
          <Header>
            <Title>{ session.name }</Title>
            <Description>{ session.description }</Description>
          </Header>
          <Footer>
            { session.group ? <Group>{ session.group }</Group> : <></> }            
            <IconNamed icon={'card'} title={session.cardsCount} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}