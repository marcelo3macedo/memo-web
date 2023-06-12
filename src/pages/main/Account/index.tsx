import Option from '@modules/actions/elements/Option';
import PageHeader from '@modules/headers/elements/PageHeader';
import Subtitle from '@modules/headers/elements/Subtitle';
import {
  PATH_ABOUT,
  PATH_HELP,
  PATH_HISTORY,
  PATH_PRIVACY_POLICY,
  PATH_PROFILE,
  PATH_SESSIONS,
} from '@services/Navigation';
import { logoutAction } from '@store/mods/auth/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

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
        <PageHeader
          title={t('account.title')}
          subTitle={t('account.subTitle')}
        />

        <Subtitle title={t('account.sessions')} />
        <Options>
          <Option
            title={t('account.actions.sessions')}
            action={() => {
              navigate(PATH_SESSIONS);
            }}
          />
          <Option
            title={t('account.actions.history')}
            action={() => {
              navigate(PATH_HISTORY);
            }}
          />
        </Options>

        <Subtitle title={t('account.settings')} />
        <Options>
          <Option
            title={t('account.actions.personal')}
            action={() => {
              navigate(PATH_PROFILE);
            }}
          />
          <Option
            title={t('account.actions.policy')}
            action={() => {
              navigate(PATH_PRIVACY_POLICY);
            }}
          />
          <Option
            title={t('account.actions.help')}
            action={() => {
              navigate(PATH_HELP);
            }}
          />
          <Option title={t('account.actions.logout')} action={logout} />
        </Options>

        <Subtitle title={t('account.system')} />
        <Options>
          <Option
            title={`${t('account.actions.version')} - ${
              process.env.REACT_APP_VERSION
            }`}
          />
          <Option
            title={t('account.actions.about')}
            action={() => {
              navigate(PATH_ABOUT);
            }}
          />
        </Options>
      </Content>
    </Wrapper>
  );
}
