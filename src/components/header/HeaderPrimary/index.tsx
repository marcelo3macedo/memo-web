import React from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import IconMedium from '@components/icons/IconMedium';
import MenuPrimary from '@components/menu/MenuPrimary';
import { menuAction, searchAction } from '@store/modules/menu/actions';
import { backAction } from '@store/modules/navigate/actions';
import SearchPrimary from '@components/search/SearchPrimary';

import { Wrapper, Content, Header } from './styles';

export default function HeaderPrimary() {
  const dispatch = useDispatch();
  const location = useLocation();

  function menuClick() {
    dispatch(menuAction());
  }

  function searchClick() {
    dispatch(searchAction());
  }

  function backClick() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
          <Header>
            {location.pathname === "/" ? (
              <>
                <IconMedium name="list" action={menuClick} />
                <IconMedium name="search" action={searchClick} />        
              </>
            ): (
              <IconMedium name="back" action={backClick} />
            )}            
          </Header>
          <MenuPrimary/>
          <SearchPrimary/>
      </Content>
    </Wrapper>
  );
}