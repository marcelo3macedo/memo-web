import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from "react-redux";

import logo from '@assets/logo.png';
import MenuOption from '../MenuOption';
import { PATH_MAIN, PATH_HELP, PATH_SESSIONS, PATH_GALLERY } from '@services/Navigation';
import { menuAction } from '@store/modules/menu/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from "@store/modules/rootReducer";
import { logoutAction } from '@store/modules/auth/actions';

import { Wrapper, Content, Logo, Header, Title, Options } from './styles';

export default function MenuPrimary() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const show = useSelector((state:RootState) => state.menu.menu);

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
        <Header onClick={() => { navigate(PATH_MAIN) } }>
          <Logo src={logo}></Logo>
          <Title>{t('application.name')}</Title>
        </Header>
        <Options>
          <MenuOption icon="home" content={t('menu.home')} action={() => { navigate(PATH_MAIN) } }/>
          <MenuOption icon="card" content={t('menu.sessions')} action={() => { navigate(PATH_SESSIONS) } }/>
          <MenuOption icon="user" content={t('menu.gallery')} action={() => { navigate(PATH_GALLERY) } }/>
          <MenuOption icon="question" content={"Ajuda"} action={() => { navigate(PATH_HELP) } }/>
          <MenuOption icon="signOut" content={"Sair"} action={() => { logout() } }/>
        </Options>
      </Content>
    </Wrapper>
  );
}