import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import PageHeader from '@modules/headers/elements/PageHeader';
import ViewCards from '@modules/blocks/elements/ViewCards';
import { formatDateField } from '@services/Format';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/mods/decks/actions';

import { Wrapper, Content, Description, Action } from './styles';

export default function SessionPublic() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { selected } = useSelector((state:RootState) => state.decks);
  const { id } = useParams() as any;

  function reviewClick() {
    
  }
  
  useEffect(() => {
    dispatch(loadAction({ id }))
  }, [dispatch, id])

  if (!selected) {
    return (
      <Wrapper>
        <PageLoading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={selected.name} subTitle={`${t('session.createdAt')} ${formatDateField(selected.createdAt)}`} />
        <Description>{selected.description}</Description>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick} />
        </Action>
        <ViewCards />
      </Content>
    </Wrapper>
  ); 
}