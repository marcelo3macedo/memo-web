import IconSmall from '@components/icons/IconSmall';
import { randomBackground } from '@config/Backgrounds';
import { openAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  Info,
  Quantity,
  ReviewTitle,
  Title,
  Opacity,
  Data,
  TitleInfo,
} from './styles';

export default function Session({ data }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = 'card';

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
