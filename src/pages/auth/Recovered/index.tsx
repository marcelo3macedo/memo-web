import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';

import { Wrapper, Content, Title, ActionArea, Fields, Message } from './styles';

export default function Recovered() {
  const t = useTranslation()
  const dispatch = useDispatch()

  function goToLogin() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }))
  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.recoverTitle')}</Title>
          <Fields>
            <Message>{t('auth.recoveredMessage')}</Message>
          </Fields>
          <ActionArea>
              <ButtonPrimary content={t('auth.goToLogin')} action={goToLogin} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}