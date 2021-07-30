import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import SearchDecks from '@components/blocks/SearchDecks';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_ADDDECK } from '@services/Navigation';

import { Wrapper, Content, Title, AddArea } from './styles';

export default function AddOrSearchDecks() {
  const dispatch = useDispatch();
  const t = useTranslation();

  function addClick() {
    dispatch(navigatePush({ path: PATH_ADDDECK }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.add')}</Title>
        <AddArea>
          <ButtonPrimary content={t('actions.add')} action={addClick}/>
        </AddArea>
        <SearchDecks title={t('decks.option')} subTitle={t('decks.search')}/>
      </Content>
    </Wrapper>
  );
}