import React from 'react';
import PropTypes from "prop-types";

import { Wrapper, Content, Section, Body } from './styles';
import HeaderPrimary from '@components/header/HeaderPrimary';
import FooterPrimary from '@components/footer/FooterPrimary';
import MenuPrimary from '@components/menu/MenuPrimary';

export default function MainLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <MenuPrimary/>
          <Section>
            <HeaderPrimary />
            <Body>
              {children}
            </Body>
          </Section>
          <FooterPrimary />
        </Content>
    </Wrapper>
  );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};