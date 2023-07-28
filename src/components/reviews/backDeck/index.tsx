import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { BackDeckProps } from '@interfaces/review/BackDeckProps';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { OptionsReview } from '../options';

import { Card, Container, Footer, Info, TitleArea } from './styles';

export function BackDeckReview({ question, answer, action }: BackDeckProps) {
  const { t } = useTranslation();
  const { options } = useSelector((state: RootState) => state.review);
  const themeText = `${t('review.question')} ${question}`;

  return (
    <Container>
      <Card>
        <FeaturedText value={themeText} />
        <TitleArea>
          <TitleText value={answer} />
        </TitleArea>
        <Info>
          <OptionsReview options={options} action={action} />
          <Footer>
            <FeaturedText value={t('review.yourAnswer')} />
          </Footer>
        </Info>
      </Card>
    </Container>
  );
}
