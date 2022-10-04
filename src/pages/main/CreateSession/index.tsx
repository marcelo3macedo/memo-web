import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import PageHeader from '@modules/headers/elements/PageHeader';
import CreateSessionForm from '@modules/forms/elements/CreateSessionForm';
import { loadAction } from '@store/mods/options/actions';

import { Wrapper, Content } from './styles';
export default function CreateSession() {
  const dispatch = useDispatch();
  const t = useTranslation();

  useEffect(() => {
    dispatch(loadAction());  
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('newDeck.title')} subTitle={t('newDeck.info')} />
        <CreateSessionForm />
      </Content>
    </Wrapper>
  ); 
}