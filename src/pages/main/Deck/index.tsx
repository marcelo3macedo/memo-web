import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import Gallery from '@components/cards/Gallery';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { cloneAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Header, Action, Info, Description } from './styles';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck:any = useSelector((state:RootState) => state.deck.deck);
  
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
          <Info>{t('decks.title')}</Info>
          <Title>{deck.name}</Title>
        </Header>
        <Description>{deck.description}</Description>
        <Action>
          { !deck.isSaved ?
            (<ButtonPrimary content={t('actions.add')} action={() => { cloneClick({ deck })} }/>) :
            (<ButtonPrimary content={t('actions.added')} disabled={true} />)}
        </Action>

        <Gallery cards={deck.cards} type="public" />
      </Content>   
    </Wrapper>
  ); 
}