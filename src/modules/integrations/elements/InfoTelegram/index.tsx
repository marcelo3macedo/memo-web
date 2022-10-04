import { Integrations } from '@config/Integrations';
import React from 'react';

import { Wrapper, Content, Message } from './styles';

export default function InfoTelegram() {
  return (
    <Wrapper>
      <Content>
        <Message>{Integrations.telegramBot}</Message>
      </Content>
    </Wrapper>
  );
}