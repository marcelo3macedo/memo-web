import { Activity } from '@pages/activities/activity';
import { ActivityFinished } from '@pages/activities/finished';
import { Main } from '@pages/activities/main';
import { ActivityScore } from '@pages/activities/score';
import {
  PATH_ACTIVITY_ACTIVITY,
  PATH_ACTIVITY_FINISHED,
  PATH_ACTIVITY_MAIN,
  PATH_ACTIVITY_RANKING
} from '@services/Navigation';
import { ActivitiesTheme } from '@themes/Activities';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function ActivitiesRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <ActivitiesTheme>
      <Switch>
        <Route path={`${getPath(PATH_ACTIVITY_MAIN)}/:slug`} component={Main} />
        <Route
          path={`${getPath(PATH_ACTIVITY_ACTIVITY)}`}
          component={Activity}
        />
        <Route
          path={`${getPath(PATH_ACTIVITY_FINISHED)}`}
          component={ActivityFinished}
        />
        <Route
          path={`${getPath(PATH_ACTIVITY_RANKING)}/:slug`}
          component={ActivityScore}
        />
      </Switch>
    </ActivitiesTheme>
  );
}
