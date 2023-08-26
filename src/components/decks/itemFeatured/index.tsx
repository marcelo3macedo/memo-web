import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { Styles } from '@interfaces/texts/TextProps';
import { PATH_PUBLICSESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Box, Content, Details, Headers, Wrapper } from './styles';

export function ItemFeatured({ id, name, institution, category, cards }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme() as any;
  const numberOfCards = `${cards || 0} ${t('deck.cards')}`;

  function featuredClick() {
    dispatch(
      navigatePush({
        route: RouteOptions.session,
        path: `${PATH_PUBLICSESSION}/${id}`
      })
    );
  }

  return (
    <Wrapper className="no-select" onClick={featuredClick}>
      <Box>
        <Content>
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
