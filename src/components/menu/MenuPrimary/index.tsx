import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from "react-redux";

import MenuOption from '../MenuOption';
import { PATH_HELP, PATH_SESSIONS, PATH_GALLERY, PATH_PRIVACY_POLICY, PATH_ABOUT, PATH_MAIN } from '@services/Navigation';
import { menuAction } from '@store/modules/menu/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from "@store/modules/rootReducer";
import { logoutAction } from '@store/modules/auth/actions';
import IconLarge from '@components/icons/IconLarge';
import logo from "@assets/logo.png";
import { About } from '@config/About';

import { Wrapper, Content, Header, Options, User, Username, Logout, OptionTitle, Picture, Title, LogoArea } from './styles';

export default function MenuPrimary() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const show = useSelector((state:RootState) => state.menu.menu);
  const { name } = useSelector((state:RootState) => state.auth);

  function menuClick() {
    dispatch(menuAction());
  }

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  function logout() {
    dispatch(logoutAction());
  }

  return (
    <Wrapper onClick={menuClick} show={show}>
      <Content>
        <LogoArea>
          <Picture src={logo} />
          <Title>Memorizou</Title>
        </LogoArea>
        <Header>
          <IconLarge name="userRounded" />
          <User>
              <Username>{ name }</Username>
              <Logout onClick={() => { logout() } }>{t('menu.exit')}</Logout>
          </User>
        </Header>
        <Options>
          <OptionTitle>{t('menu.areas')}</OptionTitle>
          <MenuOption icon="home" content={t('menu.home')} action={() => { navigate(PATH_MAIN) } }/>
          <MenuOption icon="card" content={t('menu.sessions')} action={() => { navigate(PATH_SESSIONS) } }/>
          <MenuOption icon="gallery" content={t('menu.gallery')} action={() => { navigate(PATH_GALLERY) } }/>
          
          <OptionTitle>{t('menu.company')}</OptionTitle>
          <MenuOption icon="info" content={t('menu.policy')} action={() => { navigate(PATH_PRIVACY_POLICY) } }/>
          <MenuOption icon="question" content={t('menu.help')} action={() => { navigate(PATH_HELP) } }/>
          <MenuOption icon="info" content={t('menu.about')} action={() => { navigate(PATH_ABOUT) } }/>
          <MenuOption icon="info" content={`${t('account.actions.version')} ${ About.version }`}/>          
        </Options>
      </Content>
    </Wrapper>
  );
}