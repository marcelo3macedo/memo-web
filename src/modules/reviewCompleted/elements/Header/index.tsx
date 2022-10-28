import React from 'react';
import { useTranslation } from 'react-multi-lang';

import congrats from "@assets/pages/review/congrats.png";

import { Wrapper, Content, Title, SubTitle, Name, Image } from './styles';

export default function Header({ session }) {
  const t = useTranslation()
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('reviewCompleted.congrats')}</Title>
        <SubTitle>{t('reviewCompleted.subTitle')}</SubTitle>
        <Name>{ session.deck.name }</Name>
      </Content>
      <Image src={congrats} />
    </Wrapper>
  );
}