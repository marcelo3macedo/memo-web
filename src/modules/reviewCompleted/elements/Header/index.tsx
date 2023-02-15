import React from 'react';
import { useTranslation } from 'react-multi-lang';

import congrats from "@assets/banners/happyBoy.png";

import { Wrapper, Content, Title, SubTitle, Image } from './styles';

export default function Header({ session }) {
  const t = useTranslation()
  const subTitle = t('reviewCompleted.subTitle').replace("{{sessionName}}", session.deck.name)
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('reviewCompleted.congrats')}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Content>
      <Image src={congrats} />
    </Wrapper>
  );
}