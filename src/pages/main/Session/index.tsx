import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import SessionDoubt from '@modules/blocks/elements/SessionDoubt';
import Details from '@modules/decks/elements/Details';
import Historic from '@modules/decks/elements/Historic';
import RetentionEvolution from '@modules/decks/elements/RetentionEvolution';
import PageHeader from '@modules/headers/elements/PageHeader';
import Review from '@modules/tutorial/elements/Review';
import { loadAction } from '@store/mods/review/actions';
import { loadIndexAction } from '@store/mods/sessions/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Wrapper,
  Content,
  Action,
  TutorialArea,
  Title,
  NotFound,
} from './styles';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { isLoading, index } = useSelector(
    (state: RootState) => state.sessions
  );
  const { id } = useParams() as any;

  function reviewClick() {
    dispatch(loadAction({ session: index }));
  }

  useEffect(() => {
    dispatch(loadIndexAction({ id }));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Wrapper>
        <PageLoading />
      </Wrapper>
    );
  }

  if (!index || !index.deck) {
    return (
      <Wrapper>
        <NotFound>
          <Title>{t('session.notFound')}</Title>
        </NotFound>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={index.deck.name} subTitle={index.deck.description} />
        <Details session={index} />
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick} />
        </Action>
        <SessionDoubt />
        <Historic historic={index.historic} />
        <RetentionEvolution historic={index.historic} />
        <TutorialArea>
          <Review />
        </TutorialArea>
      </Content>
    </Wrapper>
  );
}
