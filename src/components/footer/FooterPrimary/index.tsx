import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SidebarPrimary from '@components/sidebar/SidebarPrimary';

import { Wrapper, Content, Container, Footer, Copyright, CopyrightMessage } from './styles';

export default function FooterPrimary() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
          <SidebarPrimary />

          <Footer>
            <Container>

              <Copyright>
                <CopyrightMessage>{t('home.blockFooter.footer')}</CopyrightMessage>  
              </Copyright>
            </Container>
          </Footer>
      </Content>
    </Wrapper>
  );
}