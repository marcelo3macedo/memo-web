import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import IconSmall from '@components/icons/IconSmall';
import { FrontDeckProps } from '@interfaces/review/FrontDeckProps';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

import { Card, Container, Footer, FooterText, Info, TitleArea } from './styles';

export function FrontDeckReview({ theme, question, action }: FrontDeckProps) {
  const { t } = useTranslation();
  const themeText = `${t('review.theme')} ${theme}`;

  return (
    <Container onClick={action}>
      <Card>
        <FeaturedText value={themeText} />
        <TitleArea>
          <TitleText value={question} />
        </TitleArea>
        <Info>
          <FeaturedText value={t('review.before')} styled={Styles.Neutral90} />
          <Footer>
            <IconSmall name="flip" />
            <FooterText>
              <FeaturedText
                value={t('review.seeAnswer')}
                styled={Styles.Neutral90}
              />
            </FooterText>
          </Footer>
        </Info>
      </Card>
    </Container>
  );
}
