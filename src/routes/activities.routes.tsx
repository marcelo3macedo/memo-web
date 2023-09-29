import { Main } from '@pages/activities/main';
import { PATH_ACTIVITY_MAIN } from '@services/Navigation';
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
      </Switch>
    </ActivitiesTheme>
  );
}
