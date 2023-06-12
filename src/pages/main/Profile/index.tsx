import PageLoading from '@components/loading/PageLoading';
import UpdateProfileForm from '@modules/forms/elements/UpdateProfileForm';
import PageHeader from '@modules/headers/elements/PageHeader';
import { loadProfile } from '@store/modules/profile/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Content } from './styles';

export default function Profile() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={t('profile.title')}
          subTitle={t('profile.subTitle')}></PageHeader>
        <UpdateProfileForm />
      </Content>
    </Wrapper>
  );
}
