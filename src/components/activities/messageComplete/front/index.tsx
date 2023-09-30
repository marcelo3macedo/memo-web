import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import IconSmall from '@components/icons/IconSmall';
import { useTranslation } from 'react-i18next';

import { Content, Footer, FooterText, Title, Wrapper } from './styles';

export function Front({ action, session }: any) {
  const { t } = useTranslation();

  return (
    <Wrapper onClick={action}>
      <Content>
        <Title>
          <TitleText value={session.title} />
        </Title>
        <Footer>
          <IconSmall name="flip" />
          <FooterText>
            <FeaturedText value={t('review.seeAnswer')} />
          </FooterText>
        </Footer>
      </Content>
    </Wrapper>
  );
}
