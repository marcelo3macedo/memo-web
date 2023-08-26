import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Container, Header, Title } from './styles';

export function HeaderReview() {
  const { t } = useTranslation();
  const { session, position }: any = useSelector(
    (state: RootState) => state.review
  );

  if (!session) return <></>;

  const positionDetail = `${t('review.questionNumber')} ${position + 1} ${t(
    'review.questionOf'
  )} ${session.cards.length}`;
  const name = session && session.deck ? session.deck.name : null;

  return (
    <Container>
      <Header>
        <SubtitleText value={t('review.title')} />
        <Title>
          <TitleText value={name} />
        </Title>
        <SubtitleText value={positionDetail} />
      </Header>
    </Container>
  );
}
