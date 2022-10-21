import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import IconFull from '@components/icons/IconFull';
import ISquareAction from '@modules/actions/dtos/ISquareAction';

import { Wrapper, Content, Details, Action, Title, SubTitle } from './styles';

export default function SquareAction({ title, subTitle, icon, action, template }:ISquareAction) {
  return (
    <Wrapper onClick={action} className="no-select">
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