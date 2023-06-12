import logo from '@assets/logos/logo.png';
import {
  PATH_ABOUT,
  PATH_HELP,
  PATH_HOME,
  PATH_PRIVACY_POLICY,
  PATH_TERMS_CONDITIONS,
} from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Content,
  Copyright,
  CopyrightMessage,
  Info,
  Option,
  Options,
  Picture,
  Wrapper,
} from './styles';

export default function FooterPrimary() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function navigateTo(path) {
    dispatch(navigatePush({ path }));
  }

  return (
    <Wrapper>
      <Content>
        <Info>
          <Picture src={logo} alt={t('application.name')} />
        </Info>
        <Options>
          <Option
            onClick={() => {
              navigateTo(PATH_HOME);
            }}>
            {t('menu.home')}
          </Option>
          <Option
            onClick={() => {
              navigateTo(PATH_PRIVACY_POLICY);
            }}>
            {t('menu.policy')}
          </Option>
          <Option
            onClick={() => {
              navigateTo(PATH_TERMS_CONDITIONS);
            }}>
            {t('menu.terms')}
          </Option>
          <Option
            onClick={() => {
              navigateTo(PATH_HELP);
            }}>
            {t('menu.help')}
          </Option>
          <Option
            onClick={() => {
              navigateTo(PATH_ABOUT);
            }}>
            {t('menu.about')}
          </Option>
        </Options>
        <Copyright>
          <CopyrightMessage>{t('home.blockFooter.footer')}</CopyrightMessage>
        </Copyright>
      </Content>
    </Wrapper>
  );
}
