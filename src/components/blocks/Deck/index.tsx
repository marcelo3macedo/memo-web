import React from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content, Title, Opacity, Data, Frequency } from './styles';
import { openAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';

export default function Deck({ data, sessionCards=null }) {
  const dispatch = useDispatch();
  const background = randomBackground();
  
  function openDeckClick() {
    dispatch(openAction({ deck: data }));
  }

  return (
    <Wrapper onClick={openDeckClick}>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.name}</Title>
          <Frequency>{data.frequency.name}</Frequency>
        </Data>
      </Content>
    </Wrapper>
  );
}