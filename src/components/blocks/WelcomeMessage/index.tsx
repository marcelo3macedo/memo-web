import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import banner from '@assets/banners/banner01.png';
import bannerDesktop from '@assets/banners/banner01Full.jpg';
import { RootState } from '@store/modules/rootReducer';
import { Wrapper, Content, Title, Message, Banner, BannerArea } from './styles';

export default function WelcomeMessage() {
  const t = useTranslation()
  const userName = useSelector((state:RootState) => state.auth.name);
  const sessions = useSelector((state:RootState) => state.resume.sessions);

  return (
    <Wrapper>
      <Content>
        <Title>{t('welcome.title')} {userName}!</Title>
        <Message>{ !sessions || sessions.length === 0 ? t('welcome.new') : t('welcome.message')}</Message>
        <BannerArea>
          <Banner className="mobile" src={banner}></Banner>
          <Banner className="desktop" src={bannerDesktop}></Banner>
        </BannerArea>
      </Content>
    </Wrapper>
  );
}