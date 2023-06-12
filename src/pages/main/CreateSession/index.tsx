import CreateSessionForm from '@modules/forms/elements/CreateSessionForm';
import PageHeader from '@modules/headers/elements/PageHeader';
import { loadAction } from '@store/mods/options/actions';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

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
