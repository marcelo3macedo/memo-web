import React from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { backAction } from '@store/mods/navigate/actions';

import { Wrapper, Content, Header } from './styles';
import IconLarge from '@components/icons/IconLarge';
import HeaderMain from '../HeaderMain';

export default function HeaderSecondary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMain = location.pathname === "/main"

  function backClick() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
          <Header>
            { isMain ? <HeaderMain />:
                (<IconLarge name="back" action={backClick} />)
            }
          </Header>
      </Content>
    </Wrapper>
  );
}