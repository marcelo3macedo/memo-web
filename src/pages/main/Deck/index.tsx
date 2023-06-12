import ButtonPrimary from '@components/button/ButtonPrimary';
import Gallery from '@components/cards/Gallery';
import PageLoading from '@components/loading/PageLoading';
import { PATH_REVIEW } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { cloneAction, reviewAction } from '@store/modules/deck/actions';
import { loadAction } from '@store/modules/deck/open/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Wrapper,
  Content,
  Title,
  Header,
  Action,
  Info,
  Description,
} from './styles';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { id } = useParams() as any;
  const deck: any = useSelector((state: RootState) => state.deckOpen.deck);

  function cloneClick({ deck }) {
    dispatch(cloneAction({ deck }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  function reviewClick({ deck }) {
    dispatch(reviewAction({ deck }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  useEffect(() => {
    dispatch(loadAction({ deckId: id }));
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
          {!deck.isSaved ? (
            <ButtonPrimary
              content={t('actions.add')}
              action={() => {
                cloneClick({ deck });
              }}
            />
          ) : (
            <ButtonPrimary
              content={t('actions.review')}
              action={() => {
                reviewClick({ deck });
              }}
            />
          )}
        </Action>

        <Gallery cards={deck.cards} type='public' />
      </Content>
    </Wrapper>
  );
}
