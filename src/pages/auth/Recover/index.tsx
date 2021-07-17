import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function Recover() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.recoverTitle')}</Title>
          <Fields>
            <InputIcon icon="user" placeholder={t('auth.mailPlaceholder')}/>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.goToLogin')} />
              <ButtonPrimary content={t('auth.recover')} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}