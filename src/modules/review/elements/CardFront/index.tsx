import React from 'react';
import { useTranslation } from 'react-multi-lang';

import CardOptions from '../CardOptions';
import question from "@assets/pages/review/question.png";

import { Wrapper, Content, Title, Message, Image } from './styles';

export default function CardFront({ session, position, action }:any) {
  const t = useTranslation()
  const card = session && session.cards ? session.cards[position] : null

  if (!card) return <></>;
  
  return (
    <Wrapper>
      <Content onClick={action}>
        <Image src={question} />
        <Title>{t('review.theme')}: {card.title}</Title>
        <Message>{card.content}</Message>
        <CardOptions />
      </Content>
    </Wrapper>
  );
}