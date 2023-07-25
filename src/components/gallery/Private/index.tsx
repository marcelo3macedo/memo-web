import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { FrequencyInfo } from '@components/infos/frequency';
import { NumberOfCardsInfo } from '@components/infos/numberOfCards';
import { VisibilityInfo } from '@components/infos/visibility';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { Content, Header, InfoBlock, Infos, Wrapper } from './styles';

export default function Private({ deck }) {
  const { t } = useTranslation();
  if (!deck) {
    return <></>;
  }

  const visibility = deck.isPublic ? t('deck.public') : t('deck.private');
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select">
      <Content>
        <Header>
          <SubtitleText value={deck.name} />
        </Header>
        <Infos>
          <InfoBlock>
            <VisibilityInfo text={visibility} />
            <FrequencyInfo text={deck.frequency?.name} />
          </InfoBlock>
          <InfoBlock>
            <NumberOfCardsInfo text={deck.cardsCount} />
            <IconMedium name={'nextRepo'} style={{ fill: theme.GRAY_COLOR }} />
          </InfoBlock>
        </Infos>
      </Content>
    </Wrapper>
  );
}
