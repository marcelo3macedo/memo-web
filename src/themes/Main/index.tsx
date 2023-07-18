import FooterPrimary from '@components/footer/FooterPrimary';
import HeaderPrimary from '@components/header/primary';

import { Content, Footer, Page, Wrapper } from './styles';

export function MainTheme({ children }: any) {
  return (
    <Wrapper>
      <HeaderPrimary />
      <Content>
        <Page>{children}</Page>
        <Footer>
          <FooterPrimary />
        </Footer>
      </Content>
    </Wrapper>
  );
}
