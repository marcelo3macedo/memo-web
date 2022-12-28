import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from "@assets/logos/logo-named.png";
import logoPro from "@assets/logos/logo-named-pro.png";
import IconLarge from '@components/icons/IconLarge';
import { menuAction } from '@store/modules/menu/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Picture } from './styles';

export default function HeaderMain() {
  const dispatch = useDispatch()
  const { userRole } = useSelector((state:RootState) => state.users)
  const logoUrl = userRole ? logoPro : logo

  function menuClick() {
    dispatch(menuAction());
  }

  return (
    <Wrapper>
      <Content>
        <IconLarge className="list" name="list" action={menuClick} />
        <Picture src={logoUrl}/>
      </Content>
    </Wrapper>
  );
}