import correct from '@assets/animations/correct.json';
import error from '@assets/animations/error.json';
import { SubtitleText } from '@components/elements/texts/subtitle';
import LottieView from 'lottie-react';
import { useTranslation } from 'react-i18next';

import { Content, Wrapper } from './styles';

export function ValidationCheck({ isCorrect }: any) {
  const { t } = useTranslation();
  const animation = isCorrect ? correct : error;
  const message = isCorrect
    ? t('activities.congratsCorrect')
    : t('activities.wrongAnswer');
  const animationTreated = JSON.parse(JSON.stringify(animation));

  return (
    <Wrapper>
      <Content>
        <LottieView animationData={animationTreated} autoPlay loop />
        <SubtitleText value={message} />
      </Content>
    </Wrapper>
  );
}
