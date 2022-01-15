import React from 'react';
import PropTypes from "prop-types";

import logo from "@assets/logoHorizontal.png";
import { Wrapper, Content, Header, LogoArea, Menu, MenuItem, MenuTitle, Action, Image } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { useDispatch } from 'react-redux';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';

export default function PublicLayout ({ children }) {
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
            {children}
        </Content>
    </Wrapper>
  );
}

PublicLayout.propTypes = {
    children: PropTypes.element.isRequired
};