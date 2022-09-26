import React from 'react';
import IconMedium from '@components/icons/IconMedium';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, User, Action } from './styles';

export default function MenuUser({ name }) {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <User>
          <Title>{ t('account.of') } {name}</Title>
        </User>
        <Action>
          <IconMedium name="signOut" />
        </Action>
      </Content>
    </Wrapper>
  );
}