import React from 'react';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function Login() {
  return (
    <Wrapper>
        <Content>
          <Title>Login</Title>
          <Fields>
            <InputIcon icon="user"/>
            <InputIcon icon="password"/>
          </Fields>
          <ActionArea>
              <TextLinked content="Esqueceu sua senha?" />
              <ButtonPrimary content="Entrar" />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}