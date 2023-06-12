import SeeMore from '@components/elements/SeeMore';

import Item from '../Item';

import { Content, Wrapper } from './styles';

export default function List({ sessions }: any) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        {sessions.map(s => (
          <Item key={s.id} session={s} />
        ))}
        <SeeMore elements={sessions} />
      </Content>
    </Wrapper>
  );
}
