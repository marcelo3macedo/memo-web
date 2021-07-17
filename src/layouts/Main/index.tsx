import React from 'react';
import PropTypes from "prop-types";

import { Wrapper, Content, Section } from './styles';
import HeaderPrimary from '@components/header/HeaderPrimary';
import FooterPrimary from '@components/footer/FooterPrimary';

export default function MainLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <HeaderPrimary />
          <Section>{children}</Section>
          <FooterPrimary />
        </Content>
    </Wrapper>
  );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};