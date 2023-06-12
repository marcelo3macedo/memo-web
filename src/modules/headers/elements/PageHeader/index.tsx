import IPageHeader from '@modules/headers/dtos/IPageHeader';
import React from 'react';

import { Wrapper, Content, Title, Message } from './styles';

export default function PageHeader({ title, subTitle }: IPageHeader) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Message>{subTitle}</Message>
      </Content>
    </Wrapper>
  );
}
