import React from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content, Header } from './styles';
import IconMedium from '@components/icons/IconMedium';
import MenuPrimary from '@components/menu/MenuPrimary';
import { menuAction, searchAction } from '@store/modules/menu/actions';

export default function HeaderPrimary() {
  const dispatch = useDispatch();

  function menuClick() {
    dispatch(menuAction());
  }

  function searchClick() {
    dispatch(searchAction());
  }

  return (
    <Wrapper>
      <Content>
          <Header>
            <IconMedium name="list" action={menuClick} />
            <IconMedium name="search" action={searchClick} />        
          </Header>
          <MenuPrimary/>
      </Content>
    </Wrapper>
  );
}