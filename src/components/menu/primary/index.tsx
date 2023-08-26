import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import {
  PATH_ABOUT,
  PATH_CONFIGS,
  PATH_CREATESESSION,
  PATH_GALLERY,
  PATH_HELP,
  PATH_HOME,
  PATH_PRIVACYPOLICY,
  PATH_PROGRESS,
  PATH_SESSIONS
} from '@services/Navigation';
import { signOutAction } from '@store/modules/auth/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import MenuHeader from '../header';
import MenuOption from '../option';

import { Block, Content, Header, Options, Wrapper } from './styles';

export default function MenuPrimary() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function navigateTo(path, route = null) {
    dispatch(navigatePush({ route, path }));
  }

  function signOff() {
    dispatch(signOutAction());
  }

  return (
    <Wrapper>
      <Content>
        <Block>
          <Header>
            <MenuHeader
              title={t('menu.featured')}
              description={t('menu.featuredDescription')}
            />
          </Header>
          <Options>
            <MenuOption
              icon="home"
              content={t('menu.home')}
              action={() => {
                navigateTo(PATH_HOME);
              }}
            />
            <MenuOption
              icon="gallery"
              content={t('menu.gallery')}
              action={() => {
                navigateTo(PATH_GALLERY);
              }}
            />
            <MenuOption
              icon="card"
              content={t('menu.mySessions')}
              action={() => {
                navigateTo(PATH_SESSIONS);
              }}
            />
            <MenuOption
              icon="new"
              content={t('menu.new')}
              action={() => {
                navigateTo(PATH_CREATESESSION, RouteOptions.session);
              }}
            />
            <MenuOption
              icon="progress"
              content={t('menu.progress')}
              action={() => {
                navigateTo(PATH_PROGRESS, RouteOptions.account);
              }}
            />
          </Options>
        </Block>
        <Block>
          <Header>
            <MenuHeader
              title={t('menu.option')}
              description={t('menu.optionsDescription')}
            />
          </Header>
          <Options>
            <MenuOption
              icon="settings"
              content={t('menu.config')}
              action={() => {
                navigateTo(PATH_CONFIGS, RouteOptions.account);
              }}
            />
            <MenuOption
              icon="question"
              content={t('menu.help')}
              action={() => {
                navigateTo(PATH_HELP, RouteOptions.account);
              }}
            />
            <MenuOption
              icon="privacy"
              content={t('menu.policy')}
              action={() => {
                navigateTo(PATH_PRIVACYPOLICY, RouteOptions.account);
              }}
            />
            <MenuOption
              icon="info"
              content={t('menu.about')}
              action={() => {
                navigateTo(PATH_ABOUT, RouteOptions.account);
              }}
            />
            <MenuOption icon="exit" content={t('menu.exit')} action={signOff} />
          </Options>
        </Block>
      </Content>
    </Wrapper>
  );
}
