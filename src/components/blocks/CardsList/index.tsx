import React from 'react';
import { useTranslation } from 'react-multi-lang';

import Card from '../Card';

import { Wrapper, Content, Title, Message } from './styles';

export default function CardsList({ cards=[] }) {
  const t = useTranslation();
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('editCard.title')}</Title>
        {cards && cards.length > 0 ? 
          cards.map((c, index) => (
            <Card key={index} card={c} />
          )) : 
          <Message>{t('editCard.notFound')}</Message>
        }
      </Content>
    </Wrapper>
  );
}