import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { FrequencyInfo } from '@components/infos/frequency';
import { NumberOfCardsInfo } from '@components/infos/numberOfCards';
import { VisibilityInfo } from '@components/infos/visibility';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_EDITSESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Content, Header, InfoBlock, Infos, Wrapper } from './styles';

export default function Private({ deck }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  if (!deck) {
    return <></>;
  }

  function action() {
    dispatch(
      navigatePush({
        route: RouteOptions.session,
        path: `${PATH_EDITSESSION}/${deck.id}`
      })
    );
  }

  const visibility = deck.isPublic ? t('deck.public') : t('deck.private');
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select" onClick={action}>
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
