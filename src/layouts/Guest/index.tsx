import React from 'react';
import PropTypes from "prop-types";

import HeaderPublic from '@components/header/HeaderPublic';
import FooterPrimary from '@components/footer/FooterPrimary';

import { Wrapper, Content, Section } from './styles';

export default function GuestLayout ({ children }) {
  return (
    <Wrapper>
      <Content>
        <HeaderPublic />
        <Section>
          {children}
        </Section>
        <FooterPrimary />
      </Content>
    </Wrapper>
  );
}

GuestLayout.propTypes = {
    children: PropTypes.element.isRequired
};