import React from 'react';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function Help() {
  return (
    <Wrapper>
      <Content>
        <Title>Ajuda</Title>
        <Paragraph>Ficou com dúvidas sobre o funcionamento da plataforma?</Paragraph>
        <Paragraph>Contate-nos via email: contato@memorizator.com.br</Paragraph>
      </Content>
    </Wrapper>
  ); 
}