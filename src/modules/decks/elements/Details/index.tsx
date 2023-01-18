import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';
import { getTimeFromNow } from '@helpers/DateHelper';

import { Wrapper, Content, Title, Item } from './styles';

export default function Details({ session }) {
  const t = useTranslation()
  const cardNumber = session && session.cards ? session.cards.length : 0
  const cardMessage = `${cardNumber} ${t('session.availableCards')}`
  const passedTime = `${t('session.created')} ${getTimeFromNow(session.createdAt)}`
  
  return (
    <Wrapper>
      <Content>
        <Item>
          <IconMedium name={'time'} />
          <Title>{passedTime}</Title>
        </Item>
        <Item>
          <IconMedium name={'card'} />
          <Title>{cardMessage}</Title>
        </Item>      
      </Content>
    </Wrapper>
  );
}