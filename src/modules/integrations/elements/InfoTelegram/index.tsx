import { Integrations } from '@config/Integrations';
import React from 'react';

import { Wrapper, Content, Message } from './styles';

export default function InfoTelegram() {
  function openBot() {
    window.open(Integrations.telegramUrl, '_blank').focus();
  }

  return (
    <Wrapper onClick={openBot}>
      <Content>
        <Message>{Integrations.telegramBot}</Message>
      </Content>
    </Wrapper>
  );
}