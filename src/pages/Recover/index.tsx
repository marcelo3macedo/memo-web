import React from 'react';

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';

export default function Recover() {
  return (
    <Wrapper>
        <Content>
          <Title>Recuperar senha</Title>
          <Fields>
            <InputIcon icon="user" placeholder="Digite seu e-mail..."/>
          </Fields>
          <ActionArea>
              <TextLinked content="Ir para login" />
              <ButtonPrimary content="Recuperar" />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}