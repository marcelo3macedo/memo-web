import React from 'react';

import ButtonSecondary from '@components/button/ButtonSecondary';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Action } from './styles';

export default function EditOption() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.editMessage')}</Title>
        <Action className='review'>
          <ButtonSecondary content={t('decks.actions.edit')}/>
        </Action>
      </Content>
    </Wrapper>
  );
}