import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { Route, Switch, useLocation } from 'react-router-dom';

import { AccountRoutes } from './account.routes';
import { AuthRoutes } from './auth.routes';
import { MainRoutes } from './main.routes';
import { ReviewRoutes } from './review.routes';
import { SessionRoutes } from './session.routes';

export default function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path={RouteOptions.auth} component={AuthRoutes} />
      <Route path={RouteOptions.account} component={AccountRoutes} />
      <Route path={RouteOptions.session} component={SessionRoutes} />
      <Route path={RouteOptions.review} component={ReviewRoutes} />
      <Route path={RouteOptions.home} component={MainRoutes} />
    </Switch>
  );
}
