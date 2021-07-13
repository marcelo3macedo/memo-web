import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function SignUp() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.registerTitle')}</Title>
          <Fields>
            <InputIcon icon="user" placeholder={t('auth.namePlaceholder')}/>
            <InputIcon icon="user" placeholder={t('auth.mailPlaceholder')}/>
            <InputIcon icon="password" placeholder={t('auth.passwordPlaceholder')}/>
            <InputIcon icon="password" placeholder={t('auth.confirmpasswordPlaceholder')}/>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.haveAccount')} />
              <ButtonPrimary content={t('auth.signUp')} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}