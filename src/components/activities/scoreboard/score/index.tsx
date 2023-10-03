import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { HeaderText } from '@components/elements/texts/header';
import { TitleText } from '@components/elements/texts/title';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_ACTIVITY_MAIN } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Board } from '../board';

import { BackAction, Content, Details, Scoreboard, Wrapper } from './styles';

export function Score({ title, scores, target }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function goBack() {
    dispatch(
      navigatePush({
        route: RouteOptions.activities,
        path: `${PATH_ACTIVITY_MAIN}/${target}`
      })
    );
  }

  return (
    <Wrapper>
      <Content>
        <Scoreboard>
          <TitleText value={t('scoreboard.title')} />
          <Details>
            <HeaderText value={`${t('scoreboard.activity')} ${title}`} />
          </Details>
          <Board scores={scores} />
        </Scoreboard>
        <BackAction>
          <SecondaryAnimatedButton
            content={t('activities.actions.back')}
            action={goBack}
          />
        </BackAction>
      </Content>
    </Wrapper>
  );
}
