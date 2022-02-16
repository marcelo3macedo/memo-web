import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import IconSmall from "@components/icons/IconSmall";
import { openAction } from '@store/modules/session/actions';
import { randomBackground } from '@config/Backgrounds';

import { Wrapper, Content, Info, Quantity, ReviewTitle, Title, Opacity, Data, TitleInfo } from './styles';

export default function Single({ session }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = "card";
  
  function openSessionClick() {
    dispatch(openAction({ sessionId: session.id }));
  }

  if (!session || !session.deck) {
    return <></>
  }

  return (
    <Wrapper onClick={openSessionClick} className='no-select'>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <TitleInfo>{t('session.title')}</TitleInfo>
          <Title>{session.deck.name}</Title>
          <Info>
            <ReviewTitle>{t('session.cards')}</ReviewTitle>
            <IconSmall name={icon} />
            <Quantity>{session.sessionCards}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}