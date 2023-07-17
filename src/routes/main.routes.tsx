import { Home } from '@pages/main/home';
import { PATH_GALLERY, PATH_HOME, PATH_SESSIONS } from '@services/Navigation';
import { MainTheme } from '@themes/Main';
import { Route, Switch } from 'react-router-dom';

export function MainRoutes() {
  return (
    <MainTheme>
      <Switch>
        <Route exact path={PATH_HOME} component={Home} />
        <Route path={PATH_GALLERY} component={Home} />
        <Route path={PATH_SESSIONS} component={Home} />
      </Switch>
    </MainTheme>
  );
}
