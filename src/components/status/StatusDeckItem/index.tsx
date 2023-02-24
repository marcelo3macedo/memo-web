import React from 'react';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title } from './styles';

export default function StatusDeckItem({ icon, value }:any) {
  if (!value) return <></>
  
  return (
    <Wrapper>
      <Content>
        <IconSmall name={icon} />
        <Title>{value}</Title>
      </Content>
    </Wrapper>
  );
}