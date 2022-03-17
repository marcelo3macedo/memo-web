import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Options, Option, Picture, Area } from './styles';

export default function Themes({ themes=[], selected=null, action }) {
  const t = useTranslation();
 
  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.theme')}</Title>

        <Area>
          <Options>
            {themes.map(t => (
              <Option key={t.id}>
                <Picture src={t.src} draggable="false" selected={t.id === selected} onClick={() => { action({ themeId: t.id}) }} />
              </Option>
            ))}
          </Options>
        </Area>
      </Content>
    </Wrapper>
  );
}