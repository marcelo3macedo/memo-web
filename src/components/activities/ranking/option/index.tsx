import PrimaryButton from '@components/elements/buttons/Primary';
import { RankingModal } from '@components/modals/ranking';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_ACTIVITY_RANKING } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Action, Content, Wrapper } from './styles';

export function OptionRanking({ hitScore, points }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { target, saved }: any = useSelector(
    (state: RootState) => state.activities
  );
  const showModal = !saved && hitScore;

  function seeRankingAction() {
    dispatch(
      navigatePush({
        route: RouteOptions.activities,
        path: `${PATH_ACTIVITY_RANKING}/${target}`
      })
    );
  }

  return (
    <Wrapper>
      <Content>
        <Action>
          <PrimaryButton
            content={t('activityFinished.ranking')}
            action={seeRankingAction}
          />
        </Action>

        <RankingModal show={showModal} points={points} />
      </Content>
    </Wrapper>
  );
}
