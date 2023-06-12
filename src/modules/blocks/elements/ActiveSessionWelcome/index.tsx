import { SESSIONS_LIST_TIMEPASSED } from '@constants/SessionLists';
import Subtitle from '@modules/headers/elements/Subtitle';
import List from '@modules/sessions/elements/List';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { Content, Details, Wrapper } from './styles';

export default function ActiveSessionWelcome() {
  const t = useTranslation();
  const { sessions } = useSelector((state: RootState) => state.users);

  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Subtitle title={t('session.active')} />
        <Details>{t('session.activeDetails')}</Details>
        <List sessions={sessions} type={SESSIONS_LIST_TIMEPASSED} />
      </Content>
    </Wrapper>
  );
}
