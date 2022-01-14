import React from 'react';
import banner from '@assets/banners/banner02.png';

import { Wrapper, Content, Header, CardArea, CardTitle, CardContent } from './styles';

export default function CardPreview({card=null }) {
  return (
    <Wrapper>
      <Content className='no-select'>
        <CardArea background={banner}>
          <Header>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Header>
        </CardArea>
      </Content>
    </Wrapper>
  );
}