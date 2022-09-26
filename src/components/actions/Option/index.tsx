import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import { Wrapper, Content, Details, Action, Title, SubTitle } from './styles';
import IconFull from '@components/icons/IconFull';

export default function Option({ title, subTitle, icon, template=null }) {
  return (
    <Wrapper>
      <Content template={template}>
          <Details>
            <IconFull name={icon} />
            <Title>{ title }</Title>
            <SubTitle>{ subTitle }</SubTitle>
          </Details>
          <Action>
            <IconMedium name={"next"} />
          </Action>
      </Content>
    </Wrapper>
  );
}