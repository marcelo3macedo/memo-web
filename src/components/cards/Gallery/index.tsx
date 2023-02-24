import React from 'react';
import { useTranslation } from 'react-multi-lang';
import Private from '../Private';

import { Wrapper, Content, ThemeTitle, Message, Card, CardName } from './styles';

export default function Gallery({ cards=[], type, actions={} }:any) {
  const t = useTranslation();
  const hasCards = cards && cards.length > 0;
  
  return (
    <Wrapper>
      <Content>
        <ThemeTitle>{t('decks.themeTitle')}</ThemeTitle>

        {hasCards ? 
          (type === "private" ? (
            cards.map((c, i) => (
                <Private key={i} card={c} actions={actions}></Private>)
            )
          ) : (
            cards.map(i => i.title)
              .filter((value, index, self) => {
                return self.indexOf(value) === index;
              }).sort().map(d => (
                <Card key={d} className='no-select'>
                  <CardName>{d}</CardName>
                </Card>
              ))
           )) :
          (<Message>{t('editCard.emptyCards')}</Message>)}
      </Content>
    </Wrapper>
  );
}