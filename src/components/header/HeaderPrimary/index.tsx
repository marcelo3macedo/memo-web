import React from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { menuAction } from '@store/modules/menu/actions';
import { backAction } from '@store/modules/navigate/actions';

import { Wrapper, Content, Header } from './styles';
import IconLarge from '@components/icons/IconLarge';

export default function HeaderPrimary() {
  const dispatch = useDispatch();
  const location = useLocation();

  function menuClick() {
    dispatch(menuAction());
  }

  function backClick() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
          <Header>
            {
              location.pathname === "/main" ? 
                (<IconLarge className="list" name="list" action={menuClick} />):
                (<IconLarge name="back" action={backClick} />)
            }
          </Header>
      </Content>
    </Wrapper>
  );
}