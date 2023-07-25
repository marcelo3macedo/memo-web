import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { Styles } from '@interfaces/texts/TextProps';
import { PATH_PUBLICSESSION } from '@services/Navigation';
import { navigate } from '@services/Navigation/root';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { Box, Content, Details, Headers, Wrapper } from './styles';

export function ItemFeatured({ id, name, institution, category, cards }: any) {
  const { t } = useTranslation();
  const theme = useTheme() as any;
  const numberOfCards = `${cards || 0} ${t('deck.cards')}`;

  function featuredClick() {
    navigate(RouteOptions.session, {
      screen: PATH_PUBLICSESSION,
      params: { id }
    });
  }

  return (
    <Wrapper>
      <Box>
        <Content onClick={featuredClick}>
          <Headers>
            <SubtitleText value={name} />
          </Headers>
          <Details>
            <FeaturedText value={institution} styled={Styles.Pallete02} />
            <FeaturedText value={category} styled={Styles.Pallete02} />
          </Details>
          <Details>
            <FeaturedText value={numberOfCards} />
            <IconMedium name={'nextRepo'} fill={theme.GRAY_COLOR} />
          </Details>
        </Content>
      </Box>
    </Wrapper>
  );
}
