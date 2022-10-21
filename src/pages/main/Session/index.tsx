import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import PageHeader from '@modules/headers/elements/PageHeader';
import { formatDateField } from '@services/Format';
import { RootState } from '@store/modules/rootReducer';
import { loadIndexAction } from '@store/mods/sessions/actions';
import { loadAction } from '@store/mods/review/actions';

import { Wrapper, Content, Description, Action } from './styles';

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
        <PageHeader title={index.deck.name} subTitle={`${t('session.createdAt')} ${formatDateField(index.createdAt)}`} />
        <Description>{index.deck.description}</Description>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>
      </Content>
    </Wrapper>
  ); 
}