import React from 'react';
import PropTypes from "prop-types";

import { Wrapper, Content, Section } from './styles';

export default function ReviewLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <Section>{children}</Section>
        </Content>
    </Wrapper>
  );
}

ReviewLayout.propTypes = {
    children: PropTypes.element.isRequired
};