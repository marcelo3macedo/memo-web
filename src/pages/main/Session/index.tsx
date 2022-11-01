import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import { getTimeFromNow } from '@helpers/DateHelper';
import PageHeader from '@modules/headers/elements/PageHeader';
import Review from '@modules/tutorial/elements/Review';
import Details from '@modules/decks/elements/Details';
import { RootState } from '@store/modules/rootReducer';
import { loadIndexAction } from '@store/mods/sessions/actions';
import { loadAction } from '@store/mods/review/actions';

import { Wrapper, Content, Description, Action, TutorialArea } from './styles';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { isLoading, index } = useSelector((state:RootState) => state.sessions);
  const { id } = useParams() as any;
  
  function reviewClick() {
    dispatch(loadAction({ session: index }))
  }

  useEffect(() => {
    dispatch(loadIndexAction({ id }))
  }, [dispatch, id])

  if (isLoading || !index || !index.deck) {
    return (
      <Wrapper>
        <PageLoading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={index.deck.name} subTitle={''} />
        {index.deck.description ? (<Description>{index.deck.description}</Description>):<></>}
        <Details cardNumber={index.cards.length} passedTime={getTimeFromNow(index.createdAt)} />
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>
        <TutorialArea>
          <Review />
        </TutorialArea>
      </Content>
    </Wrapper>
  ); 
}