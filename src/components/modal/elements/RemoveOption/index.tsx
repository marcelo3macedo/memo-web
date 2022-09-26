import React from 'react';

import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Action, ActionTitle } from './styles';

export default function RemoveOption() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.removeMessage')}</Title>
        <Action>
          <ActionTitle>{t('decks.actions.permanentRemove')}</ActionTitle>
        </Action>
      </Content>
    </Wrapper>
  );
}