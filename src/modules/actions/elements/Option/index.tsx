import React from 'react';

import IOptionAction from '@modules/actions/dtos/IOptionAction';

import { Wrapper, Content, Title } from './styles';

export default function Option({ title, action }:IOptionAction) {
  return (
    <Wrapper onClick={action}>
      <Content className="no-select">
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}