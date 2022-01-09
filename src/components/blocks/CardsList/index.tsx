import React from 'react';
import { useTranslation } from 'react-multi-lang';

import CardPreview from '../CardPreview';

import { Wrapper, Content, Title, Message } from './styles';

export default function CardsList({ cards=[], preview=false }) {
  const t = useTranslation();
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('editCard.title')}</Title>
        {cards && cards.length > 0 ? 
          cards.map((c, index) => (
            <CardPreview key={index} card={c} />
          )) : 
          <Message>{t('editCard.notFound')}</Message>
        }
      </Content>
    </Wrapper>
  );
}