import { useTranslation } from 'react-i18next';

import {
  Container,
  Content,
  Copyright,
  CopyrightMessage,
  Footer,
  Wrapper
} from './styles';

export default function FooterPrimary() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Footer>
          <Container>
            <Copyright>
              <CopyrightMessage>
                {t('home.blockFooter.footer')}
              </CopyrightMessage>
            </Copyright>
          </Container>
        </Footer>
      </Content>
    </Wrapper>
  );
}
