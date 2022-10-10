import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';
import { signOutAction } from '@store/mods/auth/actions';

import { Wrapper, Content, Title, User, Action } from './styles';

export default function MenuUser({ name }) {
  const t = useTranslation()
  const dispatch = useDispatch()

  function signOutClick() {
    dispatch(signOutAction())
  }

  return (
    <Wrapper>
      <Content onClick={signOutClick}>
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