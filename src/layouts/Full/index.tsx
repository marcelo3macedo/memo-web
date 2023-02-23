import React from 'react';
import PropTypes from "prop-types";

import HeaderSecondary from '@components/header/HeaderSecondary';

import { Wrapper, Content, Section, Header } from './styles';

export default function FullLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <Header>
            <HeaderSecondary />
          </Header>
          <Section>{children}</Section>
        </Content>
    </Wrapper>
  );
}

FullLayout.propTypes = {
    children: PropTypes.element.isRequired
};