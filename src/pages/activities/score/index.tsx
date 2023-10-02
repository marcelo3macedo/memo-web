import { Score } from '@components/activities/scoreboard/score';

import { Content, Wrapper } from './styles';

export function ActivityScore() {
  return (
    <Wrapper>
      <Content>
        <Score />
      </Content>
    </Wrapper>
  );
}
