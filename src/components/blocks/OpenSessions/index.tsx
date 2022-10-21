import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SubTitle from '@components/elements/SubTitle';
import List from '@components/sessions/List';

import { Wrapper, Content } from './styles';

export default function OpenSessions({ sessions }) {
  const t = useTranslation()

  if (!sessions || sessions.length === 0) {
    return <></>
  }

  return (
    <Wrapper>
      <Content>
        <SubTitle title={t('session.active')} />
        <List sessions={sessions} />
      </Content>
    </Wrapper>
  );
}