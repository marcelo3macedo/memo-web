import React from 'react';

import logo from "@assets/logoHorizontal.png";
import IconLarge from '@components/icons/IconLarge';
import { useDispatch } from 'react-redux';
import { menuAction } from '@store/modules/menu/actions';

import { Wrapper, Content, Picture } from './styles';

export default function HeaderMain() {
  const dispatch = useDispatch();

  function menuClick() {
    dispatch(menuAction());
  }

  return (
    <Wrapper>
      <Content>
        <IconLarge className="list" name="list" action={menuClick} />
        <Picture src={logo}/>
      </Content>
    </Wrapper>
  );
}