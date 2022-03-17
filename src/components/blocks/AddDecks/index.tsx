import React from 'react';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';

import { Wrapper, Content, Title, Actions } from './styles';

export default function AddDecks({ action }) {
  const t = useTranslation();
  
  return (
    <Wrapper>
      <Content>
        <Title>{t("decks.add")}</Title>
        <Actions>
          <ButtonPrimary content={t("actions.createSession")} action={() => { action() }}></ButtonPrimary>
        </Actions>
      </Content>
    </Wrapper>
  );
}