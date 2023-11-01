import { Score } from '@components/activities/scoreboard/score';
import { getScoreAction } from '@store/modules/activities/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Content, Wrapper } from './styles';

export function ActivityScore() {
  const dispatch = useDispatch();
  const { slug } = useParams() as any;
  const { scores, target } = useSelector(
    (state: RootState) => state.activities
  ) as any;

  useEffect(() => {
    dispatch(getScoreAction({ slug }));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <Score scores={scores} target={target} />
      </Content>
    </Wrapper>
  );
}
