import React from 'react';

import { Wrapper, Content, Title, ActionArea, Fields, Message } from './styles';
import TextLinked from '@components/link/TextLinked';

export default function Recovered() {
  return (
    <Wrapper>
        <Content>
          <Title>Recuperar senha</Title>
          <Fields>
            <Message>Um e-mail com as intruções para recuperar a senha foi enviado para você</Message>
          </Fields>
          <ActionArea>
              <TextLinked content="Ir para login" />
          </ActionArea>
        </Content>
    </Wrapper>
  ); 
}