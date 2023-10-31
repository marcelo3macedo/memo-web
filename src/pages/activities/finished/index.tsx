import { OptionRanking } from '@components/activities/ranking/option';
import PrimaryButton from '@components/elements/buttons/Primary';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { calculateTimeDifferenceString } from '@helpers/DateHelper';
import { checkIfHitScore } from '@helpers/ScoreHelper';
import { getPoints } from '@helpers/points';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_ACTIVITY_MAIN } from '@services/Navigation';
import { getScoreAction } from '@store/modules/activities/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  Content,
  PointsArea,
  PointsItem,
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
  const { initTime, finishTime, correctAnswer, target, scores } = useSelector(
    (state: RootState) => state.activities
  ) as any;
  const [hitScore, setHitScore] = useState(false);

  const points = getPoints(initTime, finishTime, correctAnswer);
  const timeUsed = calculateTimeDifferenceString(initTime, finishTime);
  const shareToFacebook = () => {
    const url = encodeURIComponent(process.env.REACT_APP_POST_PAGE || '');
    window.open(`https://www.facebook.com/sharer.php?u=${url}`);
  };
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

  useEffect(() => {
    dispatch(getScoreAction({ slug: target }));

    const hitScore = checkIfHitScore(points, scores);
    setHitScore(hitScore);
  }, [target]);

  return (
    <Wrapper>
      <Content>
        <Title>
          <SubtitleText value={t('activityFinished.message')} />
        </Title>
        <PointsArea>
          <PointsItem>
            <Title>
              <FeaturedText value={t('activityFinished.points')} />
            </Title>
            <TitleText value={points} />
          </PointsItem>
          <PointsItem>
            <Title>
              <FeaturedText value={t('activityFinished.timeUsed')} />
            </Title>
            <TitleText value={timeUsed} />
          </PointsItem>
        </PointsArea>
        <OptionRanking hitScore={hitScore} points={points} />
        <Sharing>
          <FeaturedText value={t('activityFinished.share')} />
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
