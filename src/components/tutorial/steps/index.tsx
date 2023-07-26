import TutorialCard01 from '@assets/banners/tutorialCard01.png';
import TutorialCard02 from '@assets/banners/tutorialCard02.png';
import { TitleText } from '@components/elements/texts/title';
import { useTranslation } from 'react-i18next';

import { ItemTutorial } from '../item';

import { Container, Items, Title } from './styles';

export function StepsTutorial() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>
        <TitleText value={t('tutorial.title')} />
      </Title>
      <Items>
        <ItemTutorial
          number={t('tutorial.checkCard.order')}
          title={t('tutorial.checkCard.title')}
          content={t('tutorial.checkCard.description')}
          image={TutorialCard01}
        />

        <ItemTutorial
          number={t('tutorial.checkAnswer.order')}
          title={t('tutorial.checkAnswer.title')}
          content={t('tutorial.checkAnswer.description')}
          image={TutorialCard02}
        />

        <ItemTutorial
          number={t('tutorial.avaliate.order')}
          title={t('tutorial.avaliate.title')}
          content={t('tutorial.avaliate.description')}
        />
      </Items>
    </Container>
  );
}
