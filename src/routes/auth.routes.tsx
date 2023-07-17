import { ForgotPassword } from '@pages/authentication/forgotPassword';
import { Login } from '@pages/authentication/login';
import { Register } from '@pages/authentication/register';
import {
  PATH_FORGOTPASSWORD,
  PATH_LOGIN,
  PATH_SIGNUP
} from '@services/Navigation';
import { AuthTheme } from '@themes/Auth';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function AuthRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <AuthTheme>
      <Switch>
        <Route path={getPath(PATH_LOGIN)} component={Login} />
        <Route path={getPath(PATH_SIGNUP)} component={Register} />
        <Route path={getPath(PATH_FORGOTPASSWORD)} component={ForgotPassword} />
      </Switch>
    </AuthTheme>
  );
}
