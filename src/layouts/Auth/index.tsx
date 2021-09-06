import React from 'react';
import PropTypes from "prop-types";

import logo from '../../assets/logo.png';
import { Wrapper, Content, Header, Logo, Title } from './styles';
import ValidationAlert from '@components/validation/ValidationAlert';

export default function AuthLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
          <Header>
            <Logo src={logo}></Logo>
            <Title>memorizator</Title>
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