import React from 'react';
import { useTranslation } from 'react-multi-lang';

import logo from "@assets/logo.png";

import { Wrapper, Content, Group, Link, FooterContainer, Picture, Title, Info, SubTitle } from './styles';

export default function Footer() {
  const t = useTranslation();
  const link = process.env.REACT_APP_PROJECT;

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

                <Link href={link}>{link}</Link>
            </Info>
            

            <FooterContainer>{t('home.blockFooter.footer')}</FooterContainer>
        </Group>
      </Content>
    </Wrapper>
  );
}