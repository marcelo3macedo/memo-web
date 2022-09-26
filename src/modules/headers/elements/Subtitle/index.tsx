import React from 'react';

import ISubtitle from '@modules/headers/dtos/ISubtitle';

import { Wrapper, Content } from './styles';

export default function Subtitle({ title }:ISubtitle) {
  return (
    <Wrapper>
      <Content>{ title }</Content>
    </Wrapper>
  )
}