import React from 'react';
import PropTypes from "prop-types";

import { Wrapper, Content, Section, Body } from './styles';
import HeaderPrimary from '@components/header/HeaderPrimary';
import FooterPrimary from '@components/footer/FooterPrimary';
import MenuPrimary from '@components/menu/MenuPrimary';
import HeaderMaster from '@components/header/HeaderMaster';
import SearchPrimary from '@components/search/SearchPrimary';

export default function MainLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <HeaderMaster />
          <MenuPrimary/>
          <Section>
            <HeaderPrimary />
            <Body>
              {children}
            </Body>
          </Section>
          <FooterPrimary />
          <SearchPrimary/>
        </Content>
    </Wrapper>
  );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};