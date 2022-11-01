import React from 'react';
import PropTypes from "prop-types";

import HeaderPrimary from '@components/header/HeaderPrimary';
import FooterPrimary from '@components/footer/FooterPrimary';
import MenuPrimary from '@components/menu/MenuPrimary';
import SearchPrimary from '@components/search/SearchPrimary';
import SidebarPrimary from '@components/sidebar/SidebarPrimary';
import MenuSidebar from '@components/menu/MenuSidebar';
import MenuUserTop from '@components/menu/MenuUserTop';

import { Wrapper, Content, Section, Body, PageContainer, PageWrapper } from './styles';

export default function MainLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <Section>
            <MenuPrimary/>
            <HeaderPrimary />
            <Body>
              <MenuSidebar/>
              <PageWrapper>
                <MenuUserTop />
                <PageContainer>
                  {children}
                </PageContainer>
              </PageWrapper>
              
            </Body>
          </Section>
          <SidebarPrimary />
          <FooterPrimary />
          <SearchPrimary/>
        </Content>
    </Wrapper>
  );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};