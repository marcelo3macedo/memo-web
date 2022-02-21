import React from 'react';
import { useTranslation } from 'react-multi-lang';
import Private from '../Private';
import Public from '../Public';

import { Wrapper, Content, Title, Message } from './styles';

export default function Gallery({ cards=[], type }) {
  const t = useTranslation();
  const hasCards = cards && cards.length > 0;
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('editCard.title')}</Title>

        {hasCards ? 
          cards.map((c, i) => (
            (type === "private" ? (
              <Private key={i} card={c}></Private>) :
              <Public key={i} card={c}></Public>
            )
          )) :
          (<Message>{t('editCard.emptyCards')}</Message>)}
      </Content>
    </Wrapper>
  );
}