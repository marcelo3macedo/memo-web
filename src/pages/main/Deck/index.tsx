import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { cloneAction, reviewAction } from '@store/modules/deck/actions';
import SubSession from '@components/blocks/SubSession';

import { Wrapper, Content, Title, SubTitle, Header, Action, Themes, ThemeTitle } from './styles';
import CardsList from '@components/blocks/CardsList';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck:any = useSelector((state:RootState) => state.deck.deck);
  
  function reviewClick({ deck }) {
    dispatch(reviewAction({ deck }));
  }

  function cloneClick({ deck }) {
    dispatch(cloneAction({ deck }));
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
          { deck && (deck.isPublic && !deck.owner) ?
            (<ButtonPrimary content={t('actions.add')} action={() => { cloneClick({ deck })} }/>) :
            (<ButtonPrimary content={t('actions.review')} action={() => { reviewClick({ deck })} }/>)
          }          
        </Action>

        {(deck.children && deck.children.length > 0) ? (
          <Themes>
            <ThemeTitle>{t('decks.themeTitle')}</ThemeTitle>
            
            {deck.children.map(d => (
              <SubSession data={d} key={d.id}></SubSession>
            ))}
          </Themes>
        ) : <></> }

        <CardsList cards={deck.cards} preview={true} />
      </Content>   
    </Wrapper>
  ); 
}