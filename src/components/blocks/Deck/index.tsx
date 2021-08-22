import React from 'react';
import { useDispatch } from "react-redux";

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, Title, Opacity, Data } from './styles';
import { openAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';

export default function Deck({ data }) {
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = "card";

  function openDeckClick() {
    dispatch(openAction({ deck: data }));
  }

  return (
    <Wrapper onClick={openDeckClick}>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.name}</Title>
          <Info>
            <IconSmall name={icon} />
            <Quantity>{data.cardsCount}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}