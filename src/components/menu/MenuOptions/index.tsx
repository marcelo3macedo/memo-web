import {
  PATH_ABOUT,
  PATH_GALLERY,
  PATH_HELP,
  PATH_MAIN,
  PATH_PRIVACY_POLICY,
  PATH_SESSIONS,
} from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import MenuOption from '../MenuOption';

import { Content, SubTitle, Wrapper } from './styles';

export default function MenuOptions() {
  const dispatch = useDispatch();
  const t = useTranslation();

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper>
      <Content>
        <SubTitle>{t('menu.areas')}</SubTitle>
        <MenuOption
          icon='home'
          content={t('menu.home')}
          action={() => {
            navigate(PATH_MAIN);
          }}
        />
        <MenuOption
          icon='card'
          content={t('menu.sessions')}
          action={() => {
            navigate(PATH_SESSIONS);
          }}
        />
        <MenuOption
          icon='gallery'
          content={t('menu.gallery')}
          action={() => {
            navigate(PATH_GALLERY);
          }}
        />

        <SubTitle>{t('menu.company')}</SubTitle>
        <MenuOption
          icon='info'
          content={t('menu.policy')}
          action={() => {
            navigate(PATH_PRIVACY_POLICY);
          }}
        />
        <MenuOption
          icon='question'
          content={t('menu.help')}
          action={() => {
            navigate(PATH_HELP);
          }}
        />
        <MenuOption
          icon='info'
          content={t('menu.about')}
          action={() => {
            navigate(PATH_ABOUT);
          }}
        />
      </Content>
    </Wrapper>
  );
}
