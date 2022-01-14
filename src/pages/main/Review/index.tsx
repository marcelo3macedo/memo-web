import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Body, Content, Position, Header, Info, Card, CardArea, Flip, Message, Actions, Action, ActionValue } from './styles';
import { backAction } from '@store/modules/navigate/actions';
import { flipAction, optionAction } from '@store/modules/session/actions';

export default function Review() {
  const dispatch = useDispatch();
  const { element, session } = useSelector((state:RootState) => state.session);
  
  function flipClick() {
    dispatch(flipAction());
  }

  function optionClick(option) {
    dispatch(optionAction({ option }));    
  }

  function backClick() {
    dispatch(backAction());
  }

  if (!element || !element.selectedCard) {
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
            <Info>{element.cardPosition}/{session.cards.length}</Info>
          </Position>
          <CardArea onClick={flipClick}>
            <Card show={!element.isFlipped}>
              <Message>{element.selectedCard.content}</Message>
            </Card>
            <Card show={element.isFlipped}>
              <Message>{element.selectedCard.secretContent}</Message>
            </Card>
            <Flip>
              <IconMedium name={"rotate"}/>
            </Flip>
          </CardArea>
          <Actions show={element.isFlipped}>
            {element.options.map(o => (
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