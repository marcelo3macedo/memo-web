import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/modules/rootReducer";

import logo from '@assets/logo.png';
import { Wrapper, Content, Logo, Header, Title, Options } from './styles';
import { menuAction } from '@store/modules/menu/actions';
import MenuOption from '../MenuOption';

export default function MenuPrimary() {
  const dispatch = useDispatch();
  const show = useSelector((state:RootState) => state.menu.menu);

  function menuClick() {
    dispatch(menuAction());
  }

  return (
    <Wrapper onClick={menuClick} show={show}>
      <Content>
        <Header>
            <Logo src={logo}></Logo>
            <Title>memorizator</Title>
        </Header>
        <Options>
          <MenuOption icon="user" content={"Minha Conta"}/>
          <MenuOption icon="user" content={"Meus Decks"}/>
          <MenuOption icon="user" content={"Ajuda"}/>
          <MenuOption icon="user" content={"Sobre"}/>
        </Options>
      </Content>
    </Wrapper>
  );
}