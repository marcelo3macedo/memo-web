import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PageLoading from '@components/loading/PageLoading';
import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';
import { backAction } from '@store/mods/navigate/actions';
import { loadOptionsAction, setOptionAction } from '@store/modules/review/actions';

import { Wrapper, Body, Content, Position, Header, Info, Card, CardArea, Flip, Message, Actions, Action, ActionValue } from './styles';

export default function Review() {
  const dispatch = useDispatch();
  const { session, options, position, isLoading } = useSelector((state:RootState) => state.review);
  const [ isFlipped, setIsFlipped ] = useState(false);
  const card = session && session.cards ? session.cards[position] : null;

  useEffect(() => {
    dispatch(loadOptionsAction());
  }, [ dispatch ]);
  
  function flipClick() {
    setIsFlipped(!isFlipped);
  }

  function optionClick(option) {
    setIsFlipped(false);
    
    dispatch(setOptionAction({ card, option }));    
  }

  function backClick() {
    dispatch(backAction());
  }

  if (isLoading) {
    return <PageLoading />;
  }

  if (!card) {
    return <></>;
  }

  return ( 
    <Wrapper>
      <Content>
        <Header>
          <IconMedium name="back" action={backClick} />
        </Header>
        <Body className='no-select'>
          <Position>
            <Info>{position}/{session.cards.length}</Info>
          </Position>
          <CardArea onClick={flipClick}>
            <Card show={!isFlipped}>
              <Message>{card.content}</Message>
            </Card>
            <Card show={isFlipped}>
              <Message>{card.secretContent}</Message>
            </Card>
            <Flip>
              <IconMedium name={"rotate"}/>
            </Flip>
          </CardArea>
          <Actions show={isFlipped}>
            {options.map(o => (
              <Action key={o.id} onClick={() => optionClick(o)}>
                <ActionValue>{o.name}</ActionValue>
              </Action>
            ))}
          </Actions>
        </Body>
      </Content>
    </Wrapper>
  );
}