import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/modules/rootReducer";

import { Wrapper, Content, Header, Field, Body } from './styles';
import IconMedium from '@components/icons/IconMedium';
import { searchAction } from '@store/modules/menu/actions';

export default function SearchPrimary() {
  const dispatch = useDispatch();
  const show = useSelector((state:RootState) => state.menu.search);
  
  function closeSearchClick() {
    dispatch(searchAction());
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header>
            <Field type="text" className="input" placeholder="Pesquise aqui por..." />
            <IconMedium name="user" />            
        </Header>
        <Body onClick={() => { closeSearchClick() }}></Body>
      </Content>
    </Wrapper>
  );
}