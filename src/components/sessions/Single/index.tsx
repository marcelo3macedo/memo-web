import React from 'react';
import { useDispatch } from "react-redux";

import { randomBackground } from '@config/Backgrounds';
import IconMedium from '@components/icons/IconMedium';
import PageLoading from '@components/loading/PageLoading';
import { PATH_SESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Quantity,  Title, Opacity, Block, Header, Frequency, Body } from './styles';

export default function Single({ session }) {
  const dispatch = useDispatch();
  const icon = "card";
  const frequencyName = (session && session.deck && session.deck.frequency) ? session.deck.frequency.name : '';
  const background = (session && session.deck && session.deck.theme) ? session.deck.theme.src : randomBackground();
  
  function openSessionClick() {
    dispatch(navigatePush({ path: `${PATH_SESSION}/${session.id}` }));
  }

  if (!session || !session.deck) {
    return <PageLoading />;
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