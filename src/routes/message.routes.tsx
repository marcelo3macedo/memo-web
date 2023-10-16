import { MessageContent } from '@pages/messages/content';
import { Main } from '@pages/messages/main';
import { PATH_MESSAGE_CONTENT, PATH_MESSAGE_MAIN } from '@services/Navigation';
import { ActivitiesTheme } from '@themes/Activities';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function MessageRoutes() {
  const { path } = useRouteMatch();

  function getPath(page: string) {
    return `${path}/${page}`;
  }

  return (
    <ActivitiesTheme>
      <Switch>
        <Route path={`${getPath(PATH_MESSAGE_MAIN)}/:slug`} component={Main} />
        <Route
          path={`${getPath(PATH_MESSAGE_CONTENT)}`}
          component={MessageContent}
        />
      </Switch>
    </ActivitiesTheme>
  );
}
