import React from 'react';
import { useTranslation } from 'react-multi-lang';

import CardDifficulties from '../CardDifficulties';

import { Wrapper, Content, Message, Title } from './styles';

export default function CardBack({
  session,
  position,
  options,
  flip,
  action,
}: any) {
  const t = useTranslation();
  const card = session && session.cards ? session.cards[position] : null;

  if (!flip) return <></>;

  return (
    <Wrapper>
      <Content>
        <Title>
          {t('review.question')}: {card.content}
        </Title>
        <Message>{card.secretContent}</Message>
        <CardDifficulties card={card} options={options} action={action} />
      </Content>
    </Wrapper>
  );
}
