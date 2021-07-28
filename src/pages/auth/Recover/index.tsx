import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';

export default function Recover() {
  const t = useTranslation()
  const dispatch = useDispatch();

  function signInClick() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.recoverTitle')}</Title>
          <Fields>
            <InputIcon icon="user" placeholder={t('auth.mailPlaceholder')}/>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.goToLogin')} action={signInClick} />
              <ButtonPrimary content={t('auth.recover')} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}