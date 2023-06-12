import Single from '../Single';

import { Content, Wrapper } from './styles';

export default function Carousel({ sessions = [] }: any) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        {sessions.map(s => (
          <Single key={s.id} session={s} />
        ))}
      </Content>
    </Wrapper>
  );
}
