import React from 'react';
import PropTypes from "prop-types";

import logo from "@assets/logoHorizontal.png";
import ButtonSecondary from '@components/button/ButtonSecondary';
import { useDispatch } from 'react-redux';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';

import { Wrapper, Content, Header, LogoArea, Action, Image, Body } from './styles';

export default function VisitorLayout ({ children }) {
  const dispatch = useDispatch();
  
  function signIn() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  return (
    <Wrapper>
        <Content>
            <Header>
              <LogoArea>
                <Image src={logo} />
              </LogoArea>
              <Action>
                <ButtonSecondary content="Entrar" action={signIn} />
              </Action>
            </Header>
            <Body>
              {children}
            </Body>
        </Content>
    </Wrapper>
  );
}

VisitorLayout.propTypes = {
    children: PropTypes.element.isRequired
};