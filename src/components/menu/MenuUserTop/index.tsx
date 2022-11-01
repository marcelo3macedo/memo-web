import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import { PATH_ACCOUNT } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Info, Options } from './styles';

export default function MenuUserTop() {
  const dispatch = useDispatch()

  function goToUsers() {
    dispatch(navigatePush({ path: PATH_ACCOUNT}))
  }
  
  return (
    <Wrapper>
      <Content>
        <Info></Info>
        <Options onClick={goToUsers}>
          <IconMedium name={"userCovered"} />
        </Options>
      </Content>
    </Wrapper>
  );
}