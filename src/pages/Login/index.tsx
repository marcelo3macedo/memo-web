import React from 'react';

import { Wrapper, Content, Title } from './styles';
import InputIcon from '@components/input/InputIcon';

export default function Login() {
  return (
    <Wrapper>
        <Content>
          <Title>Login</Title>
          <InputIcon icon="user"/>
          <InputIcon icon="password"/>
        </Content>
    </Wrapper>
  ); 
}