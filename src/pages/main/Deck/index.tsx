import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import Gallery from '@components/cards/Gallery';
import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import { PATH_REVIEW } from '@services/Navigation';
import { RootState } from '@store/modules/rootReducer';
import { cloneAction, openAction, reviewAction } from '@store/modules/deck/actions';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Title, Header, Action, Info, Description } from './styles';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { id } = useParams() as any;
  const deck:any = useSelector((state:RootState) => state.deck.deck);
  
  function cloneClick({ deck }) {
    dispatch(cloneAction({ deck }));
  }

  function reviewClick({ deck }) {
    dispatch(reviewAction({ deck }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  useEffect(() => {
    const deck = { 
      id 
    };

    dispatch(openAction({ deck }));  
  }, [dispatch, id]);

  if (!deck) {
    return <PageLoading />;
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
            (<ButtonPrimary content={t('actions.review')} action={() => { reviewClick({ deck })}}/>)}
        </Action>

        <Gallery cards={deck.cards} type="public" />
      </Content>   
    </Wrapper>
  ); 
}