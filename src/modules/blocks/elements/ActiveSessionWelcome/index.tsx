import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { SESSIONS_LIST_TIMEPASSED } from '@constants/SessionLists';
import Subtitle from '@modules/headers/elements/Subtitle';
import { RootState } from '@store/modules/rootReducer';
import List from '@modules/sessions/elements/List';

import { Wrapper, Content } from './styles';

export default function ActiveSessionWelcome() {
  const t = useTranslation()
  const { sessions } = useSelector((state:RootState) => state.users);

  if (!sessions || sessions.length === 0) {
    return <></>
  }

  return (
    <Wrapper>
      <Content>
        <Subtitle title={t('session.active')} />
        <List sessions={sessions} type={SESSIONS_LIST_TIMEPASSED} />
      </Content>
    </Wrapper>
  );
}