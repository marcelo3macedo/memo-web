import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { FrequencyInfo } from '@components/infos/frequency';
import { NumberOfCardsInfo } from '@components/infos/numberOfCards';
import { VisibilityInfo } from '@components/infos/visibility';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PendingProps } from '@interfaces/sessions/PendingProps';
import { PATH_REVIEWSESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { feedAction } from '@store/modules/session/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Container, Info, InfoBlock, Item, Title } from './styles';

export function PendingSession({
  id,
  deckId,
  title,
  frequency,
  isPublic,
  cardsCount
}: PendingProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme() as any;
  const visibility = isPublic ? t('deck.public') : t('deck.private');

  if (!title) {
    return <></>;
  }

  function action() {
    dispatch(feedAction({ deckId }));
    dispatch(
      navigatePush({
        route: RouteOptions.review,
        path: PATH_REVIEWSESSION
      })
    );
  }

  return (
    <Container onClick={action} key={id}>
      <Title>
        <SubtitleText value={title} />
      </Title>
      <Info>
        <InfoBlock>
          <Item>
            <VisibilityInfo text={visibility} />
          </Item>
          <Item>
            <NumberOfCardsInfo text={cardsCount} />
          </Item>
        </InfoBlock>
        <InfoBlock>
          <Item>
            <FrequencyInfo text={frequency} />
          </Item>
          <Item>
            <IconMedium name={'nextRepo'} fill={theme.GRAY_COLOR} />
          </Item>
        </InfoBlock>
      </Info>
    </Container>
  );
}
