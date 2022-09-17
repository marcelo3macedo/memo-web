import React from 'react';
import { useTranslation } from 'react-multi-lang';

import logo from "@assets/logo.png";

import { Wrapper, Content, Group, FooterContainer, Picture, Title, Info, SubTitle } from './styles';

export default function Footer() {
  const t = useTranslation();
  
  return (
    <Wrapper>
      <Content>
        <Group>
            <Picture src={logo} alt={t('application.name')}/>

            {t('home.blockFooter.title').split("|").map((v, index) =>(
              <Title key={index}>{v}</Title>
            ))}

            <Info>              
                {t('home.blockFooter.subTitle').split("|").map((v, index) =>(
                  <SubTitle key={index}>{v}</SubTitle>
                ))}
            </Info>
            

            <FooterContainer>{t('home.blockFooter.footer')}</FooterContainer>
        </Group>
      </Content>
    </Wrapper>
  );
}