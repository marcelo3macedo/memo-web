import React from 'react';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import SearchDecks from '@components/blocks/SearchDecks';
import { Wrapper, Content, Title, AddArea } from './styles';

export default function AddOrSearchDecks() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.add')}</Title>
        <AddArea>
          <ButtonPrimary content={t('actions.add')}/>
        </AddArea>
        <SearchDecks title={t('decks.option')} subTitle={t('decks.search')}/>
      </Content>
    </Wrapper>
  );
}