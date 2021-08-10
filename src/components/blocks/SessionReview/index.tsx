import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import InfoWithIcon from '@components/info/InfoWithIcon';
import { Wrapper, Content, Title } from './styles';
import { RootState } from '@store/modules/rootReducer';

export default function SessionReview() {
  const t = useTranslation()
  const lastSession = useSelector((state:RootState) => state.resume.lastSession);

  if (!lastSession) {
    return <></>;
  }

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