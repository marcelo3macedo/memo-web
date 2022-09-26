import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import PageHeader from '@modules/headers/elements/PageHeader';
import Subtitle from '@modules/headers/elements/Subtitle';
import { PATH_ABOUT, PATH_HELP, PATH_HISTORY, PATH_PRIVACY_POLICY, PATH_PROFILE, PATH_SESSIONS } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { logoutAction } from '@store/modules/auth/actions';
import Option from '@modules/actions/elements/Option';

import { Wrapper, Content, Options } from './styles';

export default function Account() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutAction());
  }

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('account.title')} subTitle={t('account.subTitle')} />

        <Subtitle title={t('account.sessions')} />
        <Options>
          <Option title={t('account.actions.sessions')} action={() => { navigate(PATH_SESSIONS) }} />
          <Option title={t('account.actions.history')} action={() => { navigate(PATH_HISTORY) }} />
        </Options>

        <Subtitle title={t('account.settings')} />
        <Options>
          <Option title={t('account.actions.personal')} action={() => { navigate(PATH_PROFILE) }} />
          <Option title={t('account.actions.policy')} action={() => { navigate(PATH_PRIVACY_POLICY) }} />
          <Option title={t('account.actions.help')} action={() => { navigate(PATH_HELP) }} />
          <Option title={t('account.actions.logout')} action={logout} />
        </Options>

        <Subtitle title={t('account.system')} />
        <Options>
          <Option title={`${t('account.actions.version')} - `} />
          <Option title={t('account.actions.about')} action={() => { navigate(PATH_ABOUT) }} />
        </Options>
      </Content>
    </Wrapper>
  ); 
}