import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from "@assets/logoHorizontal.png";
import logoPro from "@assets/logoHorizontalPro.png";
import IconLarge from '@components/icons/IconLarge';
import { menuAction } from '@store/modules/menu/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Picture } from './styles';

export default function HeaderMain() {
  const dispatch = useDispatch()
  const user = useSelector((state:RootState) => state.auth.user)
  const { isPro } = user || {}
  const logoUrl = isPro ? logoPro : logo

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