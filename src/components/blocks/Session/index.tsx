import React from 'react';
import { useDispatch } from "react-redux";

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, ReviewTitle, Title, Opacity, Data, TitleInfo } from './styles';
import { openAction } from '@store/modules/session/actions';
import { randomBackground } from '@config/Backgrounds';
import { useTranslation } from 'react-multi-lang';

export default function Session({ data }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = "card";

  function openSessionClick() {
    dispatch(openAction({ sessionId: data.id }));
  }

  return (
    <Wrapper onClick={openSessionClick} className='no-select'>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <TitleInfo>{t('session.title')}</TitleInfo>
          <Title>{data.deck.name}</Title>
          <Info>
            <ReviewTitle>{t('session.cards')}</ReviewTitle>
            <IconSmall name={icon} />
            <Quantity>{data.sessionCards}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}