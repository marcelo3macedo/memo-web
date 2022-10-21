import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import PageLoading from '@components/loading/PageLoading';

import { RootState } from '@store/modules/rootReducer';
import { loadProfile } from '@store/modules/profile/actions';
import PageHeader from '@modules/headers/elements/PageHeader';
import UpdateProfileForm from '@modules/forms/elements/UpdateProfileForm';

import { Wrapper, Content } from './styles';

export default function Profile() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state:RootState) => state.profile);

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }
  
  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('profile.title')} subTitle={t('profile.subTitle')}></PageHeader>
        <UpdateProfileForm />
      </Content>
    </Wrapper>
  ); 
}