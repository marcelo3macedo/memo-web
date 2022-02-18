import React from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import logo from '@assets/logoHorizontal.png';
import IconMedium from '@components/icons/IconMedium';
import { menuAction, searchAction } from '@store/modules/menu/actions';
import { backAction } from '@store/modules/navigate/actions';

import { Wrapper, Content, Header, Logo, Block } from './styles';

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
            {location.pathname === "/main" ? (
              <>
                <IconMedium className="list" name="list" action={menuClick} />
                <Logo className="no-select" src={logo}></Logo>
                <IconMedium name="search" action={searchClick} />        
              </>
            ): (
              <>
                <IconMedium name="back" action={backClick} />
                <Logo className="no-select" src={logo}></Logo>
                <Block></Block> 
              </>
            )}            
          </Header>
      </Content>
    </Wrapper>
  );
}