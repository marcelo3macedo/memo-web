import { Tutorial } from '@pages/account/tutorial';
import { TutorialCards } from '@pages/account/tutorialCards';
import { About } from '@pages/main/about';
import { Config } from '@pages/main/config';
import { Help } from '@pages/main/help';
import { PrivacyPolicy } from '@pages/main/privacyPolicy';
import { Progress } from '@pages/main/progress';
import {
  PATH_ABOUT,
  PATH_CONFIGS,
  PATH_HELP,
  PATH_PRIVACYPOLICY,
  PATH_PROGRESS,
  PATH_TUTORIAL,
  PATH_TUTORIALCARDS
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
        <Route path={getPath(PATH_CONFIGS)} component={Config} />
        <Route path={getPath(PATH_HELP)} component={Help} />
        <Route path={getPath(PATH_PRIVACYPOLICY)} component={PrivacyPolicy} />
        <Route path={getPath(PATH_ABOUT)} component={About} />
        <Route path={getPath(PATH_PROGRESS)} component={Progress} />
        <Route path={getPath(PATH_TUTORIAL)} component={Tutorial} />
        <Route path={getPath(PATH_TUTORIALCARDS)} component={TutorialCards} />
      </Switch>
    </MainTheme>
  );
}
