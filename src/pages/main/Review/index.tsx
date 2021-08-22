import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Body, Content, Position, Header, Title, Info, Card, Flip, Message, Actions, Action, ActionValue } from './styles';
import { flipAction, optionAction } from '@store/modules/review/actions';
import { backAction } from '@store/modules/navigate/actions';

export default function Review() {
  const dispatch = useDispatch();
  const { isFlipped, cards, cardPosition, selectedCard, options } = useSelector((state:RootState) => state.review);
  
  function flipClick() {
    dispatch(flipAction());
  }

  function optionClick(key) {
    dispatch(optionAction({ key }));    
  }

  function backClick() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
        <Header>
            <IconMedium name="back" action={backClick} />
        </Header>
        <Body>
          <Position>
            <Info>{cardPosition}/{cards.length}</Info>
          </Position>
          <Card>
            <Message>{ isFlipped ? selectedCard.secretContent : selectedCard.content}</Message>
          </Card>
          <Flip onClick={flipClick}>
            <IconMedium name={"rotate"}/>
          </Flip>
          <Actions show={isFlipped}>
            {options.map(o => (
              <Action key={o.key} onClick={() => optionClick(o.key)}>
                <ActionValue>{o.value}</ActionValue>
              </Action>
            ))}
          </Actions>
        </Body>
      </Content>
    </Wrapper>
  ); 
}