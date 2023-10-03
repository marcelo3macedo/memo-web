import PrimaryButton from '@components/elements/buttons/Primary';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { getPoints } from '@helpers/points';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import {
  PATH_ACTIVITY_MAIN,
  PATH_ACTIVITY_RANKING
} from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  Content,
  PointsArea,
  Ranking,
  ShareButton,
  Sharing,
  SharingArea,
  Title,
  TryAgain,
  Wrapper
} from './styles';

export function ActivityFinished() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { initTime, finishTime, correctAnswer, target, name } = useSelector(
    (state: RootState) => state.activities
  ) as any;
  const points = getPoints(initTime, finishTime, correctAnswer);
  const shareToFacebook = () => {
    const url = encodeURIComponent(process.env.REACT_APP_POST_PAGE || '');
    window.open(`https://www.facebook.com/sharer.php?u=${url}`);
  };
  const title = t('activityFinished.message').replace('{{name}}', name);

  const shareToWhatsApp = () => {
    const message = t('activityFinished.shareMessage');
    const text = encodeURIComponent(
      message.replace('{{points}}', points.toString()) +
        process.env.REACT_APP_POST_PAGE
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`);
  };

  const goHome = () => {
    dispatch(
      navigatePush({
        route: RouteOptions.activities,
        path: `${PATH_ACTIVITY_MAIN}/${target}`
      })
    );
  };

  const goRanking = () => {
    dispatch(
      navigatePush({
        route: RouteOptions.activities,
        path: `${PATH_ACTIVITY_RANKING}/${target}`
      })
    );
  };

  return (
    <Wrapper>
      <Content>
        <SubtitleText value={title} />
        <PointsArea>
          <Title>
            <FeaturedText value={t('activityFinished.points')} />
          </Title>
          <TitleText value={points} />
          <Ranking>
            <SecondaryButton
              content={t('activityFinished.ranking')}
              action={goRanking}
            />
          </Ranking>
        </PointsArea>
        <Sharing>
          <Title>
            <FeaturedText value={t('activityFinished.share')} />
          </Title>
          <SharingArea>
            <ShareButton>
              <SecondaryButton
                content={t('activityFinished.whatsapp')}
                action={shareToWhatsApp}
              />
            </ShareButton>
            <ShareButton>
              <SecondaryButton
                content={t('activityFinished.facebook')}
                action={shareToFacebook}
              />
            </ShareButton>
          </SharingArea>
        </Sharing>
        <TryAgain>
          <PrimaryButton
            content={t('activityFinished.tryAgain')}
            action={goHome}
          />
        </TryAgain>
      </Content>
    </Wrapper>
  );
}
