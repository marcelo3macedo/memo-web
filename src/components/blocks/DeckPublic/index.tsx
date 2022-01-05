import React from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content, Title,  FrequencyInfo, VisibilityInfo, FrequencyTitle, TitleInfo, Opacity, Data, Frequency } from './styles';
import { openAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';
import { useTranslation } from 'react-multi-lang';
import IconSmall from '@components/icons/IconSmall';

export default function DeckPublic({ data, sessionCards=null }) {
  const t = useTranslation();
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
        </Data>
      </Content>
    </Wrapper>
  );
}