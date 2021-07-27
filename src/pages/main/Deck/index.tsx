import React from 'react';

import ButtonPrimary from '@components/button/ButtonPrimary';
import CardsTotal from '@components/blocks/CardsTotal';
import SessionReview from '@components/blocks/SessionReview';

import { Wrapper, Content, Title, Header } from './styles';

export default function Deck() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>Nome do Deck</Title>
          <CardsTotal/>
        </Header>
        <ButtonPrimary content={"Revisar"}/>        
      </Content>
      <SessionReview/>
    </Wrapper>
  ); 
}