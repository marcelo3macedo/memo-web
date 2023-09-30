import { Score } from '@components/activities/scoreboard/score';

import { Content, Wrapper } from './styles';

export function Activity() {
  return (
    <Wrapper>
      <Content>
        <Score />
      </Content>
    </Wrapper>
  );
}
