import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ActionArea, Fields, Message } from './styles';
import TextLinked from '@components/link/TextLinked';

export default function Recovered() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.recoverTitle')}</Title>
          <Fields>
            <Message>{t('auth.recoveredMessage')}</Message>
          </Fields>
          <ActionArea>
              <TextLinked content={t('auth.goToLogin')} />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}