import React from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import logo from '@assets/logoHorizontal.png';
import IconMedium from '@components/icons/IconMedium';
import { menuAction, searchAction } from '@store/modules/menu/actions';
import { backAction } from '@store/modules/navigate/actions';
import SearchPrimary from '@components/search/SearchPrimary';

import { Wrapper, Content, Header, Logo } from './styles';

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
                <IconMedium className="list" name="list" action={menuClick} />
                <Logo src={logo}></Logo>
                <IconMedium name="search" action={searchClick} />        
              </>
            ): (
              <IconMedium name="back" action={backClick} />
            )}            
          </Header>
          <SearchPrimary/>
      </Content>
    </Wrapper>
  );
}