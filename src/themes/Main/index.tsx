import FooterPrimary from '@components/footer/FooterPrimary';
import HeaderMobile from '@components/header/mobile';
import HeaderPrimary from '@components/header/primary';
import { useState } from 'react';

import { Content, Footer, Page, Wrapper } from './styles';

export function MainTheme({ children }: any) {
  const [mobModal, setMobModal] = useState(false);

  function interactModal() {
    setMobModal(!mobModal);
  }

  return (
    <Wrapper>
      <HeaderPrimary mobModal={mobModal} action={interactModal} />
      <Content>
        <HeaderMobile
          action={() => {
            interactModal();
          }}
        />
        <Page>{children}</Page>
        <Footer>
          <FooterPrimary />
        </Footer>
      </Content>
    </Wrapper>
  );
}
