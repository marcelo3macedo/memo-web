import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import IIndexGallerySessions from '@modules/sessions/dtos/IIndexGallerySessions';

import { Wrapper, Content, Header, Title, Description, Footer, Card, Action } from './styles';

export default function IndexGallery({ session }:IIndexGallerySessions) {
  
  function sessionClick() {    
  }

  return (
    <Wrapper onClick={sessionClick}>
      <Content>
        <Card>
          <Header>
            <Title>{ session.name }</Title>
            <Description>{ session.description }</Description>
          </Header>
          <Footer>
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