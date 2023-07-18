import { Login } from '@pages/authentication/login';
import { About } from '@pages/main/about';
import { Help } from '@pages/main/help';
import { PrivacyPolicy } from '@pages/main/privacyPolicy';
import {
  PATH_ABOUT,
  PATH_CONFIGS,
  PATH_HELP,
  PATH_PRIVACYPOLICY,
  PATH_PROGRESS
} from '@services/Navigation';
import { MainTheme } from '@themes/Main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function AccountRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <MainTheme>
      <Switch>
        <Route path={getPath(PATH_CONFIGS)} component={Login} />
        <Route path={getPath(PATH_HELP)} component={Help} />
        <Route path={getPath(PATH_PRIVACYPOLICY)} component={PrivacyPolicy} />
        <Route path={getPath(PATH_ABOUT)} component={About} />
        <Route path={getPath(PATH_PROGRESS)} component={Login} />
      </Switch>
    </MainTheme>
  );
}