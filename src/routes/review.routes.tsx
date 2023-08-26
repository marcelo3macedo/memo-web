import { Review } from '@pages/review';
import { ReviewFinish } from '@pages/reviewFinish';
import { ReviewPending } from '@pages/reviewPending';
import {
  PATH_REVIEWFINISH,
  PATH_REVIEWPENDING,
  PATH_REVIEWSESSION
} from '@services/Navigation';
import { MainTheme } from '@themes/Main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function ReviewRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <MainTheme>
      <Switch>
        <Route path={getPath(PATH_REVIEWSESSION)} component={Review} />
        <Route path={getPath(PATH_REVIEWFINISH)} component={ReviewFinish} />
        <Route path={getPath(PATH_REVIEWPENDING)} component={ReviewPending} />
      </Switch>
    </MainTheme>
  );
}
