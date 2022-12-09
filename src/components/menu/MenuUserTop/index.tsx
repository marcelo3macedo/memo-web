import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import { PATH_ACCOUNT, PATH_TUTORIAL } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Info, Options, Option } from './styles';

export default function MenuUserTop() {
  const dispatch = useDispatch()

  function goToUsers() {
    dispatch(navigatePush({ path: PATH_ACCOUNT}))
  }

  function goToTutorial() {
    dispatch(navigatePush({ path: PATH_TUTORIAL }))
  }
  
  return (
    <Wrapper>
      <Content>
        <Info></Info>
        <Options>
          <Option onClick={goToTutorial}>
            <IconMedium name={"question"} />
          </Option>
          <Option onClick={goToUsers}>
            <IconMedium name={"userCovered"} />
          </Option>
        </Options>
      </Content>
    </Wrapper>
  );
}