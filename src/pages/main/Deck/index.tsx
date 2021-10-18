import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { reviewAction } from '@store/modules/deck/actions';
import SubSession from '@components/blocks/SubSession';

import { Wrapper, Content, Title, SubTitle, Header, Action, Themes, ThemeTitle } from './styles';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck:any = useSelector((state:RootState) => state.deck.deck);

  function reviewClick({ deck }) {
    dispatch(reviewAction({ deck }));
  }

  if (!deck) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <SubTitle>{t('decks.title')}</SubTitle>
          <Title>{deck.name}</Title>
        </Header>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={() => { reviewClick({ deck })} }/>
        </Action>

        <Themes>
          <ThemeTitle>{t('decks.themeTitle')}</ThemeTitle>
          {deck.decks ? 
            deck.decks.map(d => (
              <SubSession data={d} key={d.id}></SubSession>
            ))
            : <></>
          }
        </Themes>
      </Content>   
    </Wrapper>
  ); 
}