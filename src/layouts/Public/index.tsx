import React from 'react';
import PropTypes from "prop-types";

import logo from "@assets/logoHorizontalWhite.png";
import { Wrapper, Content, Header, LogoArea, Menu, MenuItem, MenuTitle, Action, Image } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';

export default function PublicLayout ({ children }) {
  return (
    <Wrapper>
        <Content>
            <Header>
              <LogoArea>
                <Image src={logo} />
              </LogoArea>
              <Menu>
                  <MenuItem>
                    <MenuTitle>Home</MenuTitle>
                  </MenuItem>
                  <MenuItem>
                    <MenuTitle>Como funciona</MenuTitle>
                  </MenuItem>
                  <MenuItem>
                    <MenuTitle>O Método</MenuTitle>
                  </MenuItem>
                  <MenuItem>
                    <MenuTitle>Sobre</MenuTitle>
                  </MenuItem>
              </Menu>
              <Action>
                <ButtonSecondary content="Acessar agora" />
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