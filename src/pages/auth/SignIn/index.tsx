import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_FORGOT_PASSWORD } from '@services/Navigation';

export default function SignIn() {
  const t = useTranslation()
  const dispatch = useDispatch();

  function forgotPasswordClick() {
    dispatch(navigatePush({ path: PATH_FORGOT_PASSWORD }));
  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.loginTitle')}</Title>
          <Fields>
            <InputIcon icon="user" placeholder={t('auth.mailPlaceholder')}/>
            <InputIcon icon="password" placeholder={t('auth.passwordPlaceholder')}/>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.forgotPassword')} action={forgotPasswordClick}/>
              <ButtonPrimary content={t('auth.enter')}/>
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}