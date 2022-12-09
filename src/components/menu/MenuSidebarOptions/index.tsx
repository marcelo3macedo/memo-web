import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import MenuSidebarOption from '../MenuSidebarOption';
import { navigatePush } from '@store/mods/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { PATH_ABOUT, PATH_CREATESESSION, PATH_GALLERY, PATH_INTEGRATION, PATH_MAIN, PATH_PLANS, PATH_SESSIONS } from '@services/Navigation';

import { Wrapper, Content } from './styles';

export default function MenuSidebarOptions() {
  const dispatch = useDispatch()
  const t = useTranslation()
  const user = useSelector((state:RootState) => state.auth.user)
  const { isPro } = user || {}

  function navigate(path) {
    dispatch(navigatePush({ path: path }))
  }

  return (
    <Wrapper>
      <Content>
        <MenuSidebarOption icon="home" content={t('menu.home')} action={() => { navigate(PATH_MAIN) } }/>
        <MenuSidebarOption icon="card" content={t('menu.sessions')} action={() => { navigate(PATH_SESSIONS) } }/>
        <MenuSidebarOption icon="gallery" content={t('menu.gallery')} action={() => { navigate(PATH_GALLERY) } }/>
        { isPro ? (
          <>
            <MenuSidebarOption icon="new" content={t('menu.new')} action={() => { navigate(PATH_CREATESESSION) } }/>
            <MenuSidebarOption icon="next" content={t('menu.integrations')} action={() => { navigate(PATH_INTEGRATION) } }/>
          </>
        ) : <></> }        
        <MenuSidebarOption icon="plans" content={t('menu.plans')} action={() => { navigate(PATH_PLANS) } }/>
        <MenuSidebarOption icon="info" content={t('menu.about')} action={() => { navigate(PATH_ABOUT) } }/>
      </Content>
    </Wrapper>
  );
}