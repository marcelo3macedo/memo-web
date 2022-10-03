import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import PageHeader from '@modules/headers/elements/PageHeader';
import ListThemes from '@modules/decks/elements/ListThemes';
import { RootState } from '@store/modules/rootReducer';
import { loadIndexAction } from '@store/mods/featured/actions';
import { loadAction } from '@store/mods/review/actions';

import { Wrapper, Content, Action } from './styles';

export default function Featured() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { isLoading, index } = useSelector((state:RootState) => state.featured);
  const { id } = useParams() as any;
  
  function reviewClick() {
    dispatch(loadAction({ session: index }))
  }

  useEffect(() => {
    dispatch(loadIndexAction({ id }))
  }, [dispatch, id])

  if (isLoading || !index) {
    return (
      <Wrapper>
        <PageLoading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={index.name} subTitle={index.description} />
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>
        <ListThemes cards={index.cards} />
      </Content>
    </Wrapper>
  ); 
}