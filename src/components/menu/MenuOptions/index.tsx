import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import MenuOption from '../MenuOption';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, SubTitle } from './styles';
import { PATH_ABOUT, PATH_GALLERY, PATH_HELP, PATH_INTEGRATION, PATH_MAIN, PATH_PRIVACY_POLICY, PATH_SESSIONS } from '@services/Navigation';

export default function MenuOptions() {
  const dispatch = useDispatch()
  const t = useTranslation()

  function navigate(path) {
    dispatch(navigatePush({ path: path }))
  }

  return (
    <Wrapper>
      <Content>
        <SubTitle>{t('menu.areas')}</SubTitle>
        <MenuOption icon="home" content={t('menu.home')} action={() => { navigate(PATH_MAIN) } }/>
        <MenuOption icon="card" content={t('menu.sessions')} action={() => { navigate(PATH_SESSIONS) } }/>
        <MenuOption icon="gallery" content={t('menu.gallery')} action={() => { navigate(PATH_GALLERY) } }/>
        <MenuOption icon="next" content={t('menu.integrations')} action={() => { navigate(PATH_INTEGRATION) } }/>
        
        <SubTitle>{t('menu.company')}</SubTitle>
        <MenuOption icon="info" content={t('menu.policy')} action={() => { navigate(PATH_PRIVACY_POLICY) } }/>
        <MenuOption icon="question" content={t('menu.help')} action={() => { navigate(PATH_HELP) } }/>
        <MenuOption icon="info" content={t('menu.about')} action={() => { navigate(PATH_ABOUT) } }/>
      </Content>
    </Wrapper>
  );
}