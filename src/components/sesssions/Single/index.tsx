import React from 'react';
import { useDispatch } from "react-redux";

import IconMedium from '@components/icons/IconMedium';
import { openAction } from '@store/modules/session/actions';
import { randomBackground } from '@config/Backgrounds';

import { Wrapper, Content, Quantity,  Title, Opacity, Block, Header, Frequency, Body } from './styles';

export default function Single({ session }) {
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = "card";
  const frequencyName = (session && session.deck && session.deck.frequency) ? session.deck.frequency.name : ''
  
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
        <Block>
          <Header>
            <Frequency>{frequencyName}</Frequency>
            <Title>{session.deck.name}</Title>
          </Header>
          <Body>
            <IconMedium name={icon} />
            <Quantity>{session.sessionCards}</Quantity>
          </Body>
        </Block>
      </Content>
    </Wrapper>
  );
}