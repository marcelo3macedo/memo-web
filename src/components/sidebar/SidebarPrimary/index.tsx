import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_ACCOUNT, PATH_HELP, PATH_MAIN, PATH_MYDECKS, PATH_SEARCHDECK } from '@services/Navigation';

import { Wrapper, Content, Item, Title } from './styles';

export default function SidebarPrimary() {
  const dispatch = useDispatch();
  const actualPath = useSelector((state:RootState) => state.navigate.actualPath);

  function homeClick() {
    dispatch(navigatePush({ path: PATH_MAIN }));
  }

  function decksClick() {
    dispatch(navigatePush({ path: PATH_MYDECKS }));
  }

  function searchClick() {
    dispatch(navigatePush({ path: PATH_SEARCHDECK }));
  }

  function accountClick() {
    dispatch(navigatePush({ path: PATH_ACCOUNT }));
  }

  function isActive(path) {
    if (path === actualPath) {
      return "active"
    }
  }

  return (
    <Wrapper>
        <Content>
          <Item onClick={homeClick} className={isActive(PATH_MAIN)}>
            <IconMedium name="home" />
            <Title>Home</Title>
          </Item>
          <Item onClick={decksClick} className={isActive(PATH_MYDECKS)}>
            <IconMedium name="card" />
            <Title>Sessões</Title>
          </Item>
          <Item onClick={searchClick} className={isActive(PATH_SEARCHDECK)}>
            <IconMedium name="search" />
            <Title>Pesquisar</Title>
          </Item>
          <Item onClick={accountClick} className={isActive(PATH_ACCOUNT)}>
            <IconMedium name="user" />
            <Title>Conta</Title>
          </Item>          
        </Content>
    </Wrapper>
  );
}