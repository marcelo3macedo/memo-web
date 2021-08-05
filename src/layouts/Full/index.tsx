import React from 'react';
import PropTypes from "prop-types";

import { Wrapper, Content, Section } from './styles';

export default function FullLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <Section>{children}</Section>
        </Content>
    </Wrapper>
  );
}

FullLayout.propTypes = {
    children: PropTypes.element.isRequired
};