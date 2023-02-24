import React from 'react';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import IconLarge from '@components/icons/IconLarge';

import { Wrapper, Content, Title, Actions } from './styles';

export default function Empty({ action=null }:any) {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <IconLarge name="alert" />
        <Title>{t('decks.empty')}</Title>
        <Actions>
          <ButtonPrimary content={t('decks.create')} action={action} />
        </Actions>
      </Content>
    </Wrapper>
  );
}