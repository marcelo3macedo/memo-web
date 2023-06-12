import { SESSIONS_PRIVATE } from '@constants/Sessions';

import Private from '../Private';
import Public from '../Public';

import { Content, Wrapper } from './styles';

export default function List({ sessions, type }: any) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        {sessions.map(s =>
          type === SESSIONS_PRIVATE ? (
            <Private key={s.id} session={s} />
          ) : (
            <Public key={s.id} />
          )
        )}
      </Content>
    </Wrapper>
  );
}
