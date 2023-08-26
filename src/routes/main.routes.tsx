import { Gallery } from '@pages/main/gallery';
import { Home } from '@pages/main/home';
import { Session } from '@pages/main/session';
import { PATH_GALLERY, PATH_HOME, PATH_SESSIONS } from '@services/Navigation';
import { MainTheme } from '@themes/Main';
import { Route, Switch } from 'react-router-dom';

export function MainRoutes() {
  return (
    <MainTheme>
      <Switch>
        <Route exact path={PATH_HOME} component={Home} />
        <Route path={PATH_SESSIONS} component={Session} />
        <Route path={PATH_GALLERY} component={Gallery} />
      </Switch>
    </MainTheme>
  );
}
