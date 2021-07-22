import React from 'react';
import { useTranslation } from 'react-multi-lang';

import InfoWithIcon from '@components/info/InfoWithIcon';
import { Wrapper, Content, Title } from './styles';

export default function SessionReview() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('sessionReview.title')}</Title>

        <InfoWithIcon data={ { "icon": "user", "title": "Deck", "value": "100" } }/>
        <InfoWithIcon data={ { "icon": "user", "title": "Deck", "value": "100" } }/>
        <InfoWithIcon data={ { "icon": "user", "title": "Deck", "value": "100" } }/>
        <InfoWithIcon data={ { "icon": "user", "title": "Deck", "value": "100" } }/>
      </Content>
    </Wrapper>
  );
}