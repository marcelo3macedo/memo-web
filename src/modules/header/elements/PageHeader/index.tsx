import React from 'react';

import IPageHeader from '@modules/header/dtos/IPageHeader';

import { Wrapper, Content, Title, Message } from './styles';

export default function PageHeader({ title, subTitle }:IPageHeader) {
  return (
    <Wrapper>
      <Content>
        <Title>{ title }</Title>
        <Message>{ subTitle }</Message>
      </Content>
    </Wrapper>
  );
}