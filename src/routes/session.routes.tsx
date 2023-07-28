import { CreateSession } from '@pages/sessions/create';
import { EditSession } from '@pages/sessions/edit';
import { PublicSession } from '@pages/sessions/public';
import {
  PATH_CREATESESSION,
  PATH_EDITSESSION,
  PATH_PUBLICSESSION
} from '@services/Navigation';
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
        <Route path={getPath(PATH_CREATESESSION)} component={CreateSession} />
        <Route
          path={`${getPath(PATH_PUBLICSESSION)}/:id`}
          component={PublicSession}
        />
        <Route
          path={`${getPath(PATH_EDITSESSION)}/:id`}
          component={EditSession}
        />
      </Switch>
    </MainTheme>
  );
}
