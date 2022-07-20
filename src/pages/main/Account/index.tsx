import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import HeaderPage from '@components/header/HeaderPage';
import Option from '@components/blocks/Option';
import { PATH_ABOUT, PATH_HELP, PATH_HISTORY, PATH_PRIVACY_POLICY, PATH_PROFILE, PATH_SESSIONS } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { logoutAction } from '@store/modules/auth/actions';

import { Wrapper, Content, Options, Title } from './styles';

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
        <HeaderPage title={t('account.title')} subTitle={t('account.subTitle')}></HeaderPage>

        <Options>
          <Title>{t('account.sessions')}</Title>
          <Option title={t('account.actions.sessions')} action={() => { navigate(PATH_SESSIONS) }} />
          <Option title={t('account.actions.history')} action={() => { navigate(PATH_HISTORY) }} />
        </Options>

        <Options>
          <Title>{t('account.settings')}</Title>
          <Option title={t('account.actions.personal')} action={() => { navigate(PATH_PROFILE) }} />
          <Option title={t('account.actions.policy')} action={() => { navigate(PATH_PRIVACY_POLICY) }} />
          <Option title={t('account.actions.help')} action={() => { navigate(PATH_HELP) }} />
          <Option title={t('account.actions.logout')} action={logout} />
        </Options>

        <Options>
          <Title>{t('account.system')}</Title>
          <Option title={`${t('account.actions.version')} - `} />
          <Option title={t('account.actions.about')} action={() => { navigate(PATH_ABOUT) }} />
        </Options>
      </Content>
    </Wrapper>
  ); 
}