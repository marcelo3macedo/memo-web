import React from 'react';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function SignUp() {
  return (
    <Wrapper>
        <Content>
          <Title>Registrar</Title>
          <Fields>
            <InputIcon icon="user" placeholder="Nome"/>
            <InputIcon icon="user" placeholder="E-mail"/>
            <InputIcon icon="password" placeholder="Senha"/>
            <InputIcon icon="password" placeholder="Confirme sua senha"/>
          </Fields>
          <ActionArea>
              <TextLinked content="Já tenho uma conta" />
              <ButtonPrimary content="Cadastrar" />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}