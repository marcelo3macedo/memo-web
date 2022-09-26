import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { menuAction } from '@store/modules/menu/actions';
import { RootState } from "@store/modules/rootReducer";
import MenuHeader from '../MenuHeader';
import MenuUser from '../MenuUser';
import MenuOptions from '../MenuOptions';

import { Wrapper, Content } from './styles';

export default function MenuPrimary() {
  const dispatch = useDispatch();
  const show = useSelector((state:RootState) => state.menu.menu);
  const { name } = useSelector((state:RootState) => state.auth);

  function menuClick() {
    dispatch(menuAction());
  }

  return (
    <Wrapper onClick={menuClick} show={show}>
      <Content>
        <MenuHeader />
        <MenuUser name={name} />
        <MenuOptions />
      </Content>
    </Wrapper>
  );
}