import React from 'react';
import { useDispatch } from "react-redux";

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, Title, Opacity, Data } from './styles';
import { openAction } from '@store/modules/deck/actions';

export default function Deck({ data }) {
  const dispatch = useDispatch();
  const background = "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg";
  const quantity = 100;
  const icon = "user";

  function openDeckClick() {
    dispatch(openAction(data));
  }

  return (
    <Wrapper onClick={openDeckClick}>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.name}</Title>
          <Info>
            <IconSmall name={icon} />
            <Quantity>{quantity}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}