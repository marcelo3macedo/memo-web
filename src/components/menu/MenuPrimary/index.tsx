import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/modules/rootReducer";

import logo from '@assets/logo.png';

import MenuOption from '../MenuOption';
import { Wrapper, Content, Logo, Header, Title, Options } from './styles';
import { menuAction } from '@store/modules/menu/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_HOME, PATH_HELP, PATH_ABOUT, PATH_MYACCOUNT, PATH_MYDECKS } from '@services/Navigation';

export default function MenuPrimary() {
  const dispatch = useDispatch();
  const show = useSelector((state:RootState) => state.menu.menu);

  function menuClick() {
    dispatch(menuAction());
  }

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper onClick={menuClick} show={show}>
      <Content>
        <Header onClick={() => { navigate(PATH_HOME) } }>
            <Logo src={logo}></Logo>
            <Title>memorizator</Title>
        </Header>
        <Options>
          <MenuOption icon="user" content={"Meus Decks"} action={() => { navigate(PATH_MYDECKS) } }/>
          <MenuOption icon="user" content={"Minha Conta"} action={() => { navigate(PATH_MYACCOUNT) } }/>
          <MenuOption icon="user" content={"Ajuda"} action={() => { navigate(PATH_HELP) } }/>
          <MenuOption icon="user" content={"Sobre"} action={() => { navigate(PATH_ABOUT) } }/>
        </Options>
      </Content>
    </Wrapper>
  );
}