import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function SignIn() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.loginTitle')}</Title>
          <Fields>
            <InputIcon icon="user" placeholder={t('auth.mailPlaceholder')}/>
            <InputIcon icon="password" placeholder={t('auth.passwordPlaceholder')}/>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.forgotPassword')} />
              <ButtonPrimary content={t('auth.enter')} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}