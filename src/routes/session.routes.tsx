import { Login } from '@pages/authentication/login';
import { PATH_CREATESESSION } from '@services/Navigation';
import { MainTheme } from '@themes/Main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function SessionRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <MainTheme>
      <Switch>
        <Route path={getPath(PATH_CREATESESSION)} component={Login} />
      </Switch>
    </MainTheme>
  );
}
