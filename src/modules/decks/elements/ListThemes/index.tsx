import IListThemes from '@modules/decks/dtos/IListThemes';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Message, Title } from './styles';

export default function ListThemes({ cards }: IListThemes) {
  const t = useTranslation();
  const themes =
    !cards || cards.length === 0
      ? null
      : cards
          .map(i => i.title)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
          .sort();

  if (!themes) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.themeTitle')}</Title>
        {themes.map((t, i) => (
          <Message key={i}>{t}</Message>
        ))}
      </Content>
    </Wrapper>
  );
}
