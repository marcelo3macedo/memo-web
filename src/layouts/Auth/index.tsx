import React from 'react';
import PropTypes from "prop-types";

import logo from '@assets/logo.png';
import background from "@assets/pages/auth/background.png";
import ValidationAlert from '@components/validation/ValidationAlert';

import { Wrapper, Content, Header, Logo, Background } from './styles';

export default function AuthLayout ({ children }) {
  return (
    <Wrapper>
      <Background src={background} />
      <Content>
        <Header>
          <Logo src={logo}></Logo>
        </Header>
        {children}
        <ValidationAlert/>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
};