import React from 'react';
import { useTranslation } from 'react-multi-lang';

import info01 from "@assets/banners/info1.png";
import info02 from "@assets/banners/info2.png";
import info03 from "@assets/banners/info3.png";
import info04 from "@assets/banners/info4.png";

import { Wrapper, Content, Group, Title, TitleArea, Items, Item, ItemArea, Picture, ItemTitle, ItemDescription } from './styles';

export default function HowItWorks() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Group>
            <TitleArea>
              {t('home.blockHowItWorks.title').split("|").map((v, index) =>(
                <Title key={index}>{v}</Title>
              ))}
            </TitleArea>
        </Group>
        <Group>
          <Items>
            <Item>
                <ItemArea>
                  <Picture src={info01} alt={t('application.name')}/>
                  <ItemTitle>{t('home.blockHowItWorks.search.title')}</ItemTitle>
                  <ItemDescription>{t('home.blockHowItWorks.search.subTitle')}</ItemDescription>
                </ItemArea>
            </Item>
            <Item>
                <ItemArea>
                  <Picture src={info02} alt={t('application.name')}/>
                  <ItemTitle>{t('home.blockHowItWorks.add.title')}</ItemTitle>
                  <ItemDescription>{t('home.blockHowItWorks.add.subTitle')}</ItemDescription>
                </ItemArea>
            </Item>
            <Item>
                <ItemArea>
                  <Picture src={info03} alt={t('application.name')}/>
                  <ItemTitle>{t('home.blockHowItWorks.review.title')}</ItemTitle>
                  <ItemDescription>{t('home.blockHowItWorks.review.subTitle')}</ItemDescription>
                </ItemArea>
            </Item>
            <Item>
                <ItemArea>
                  <Picture src={info04} alt={t('application.name')}/>
                  <ItemTitle>{t('home.blockHowItWorks.repeat.title')}</ItemTitle>
                  <ItemDescription>{t('home.blockHowItWorks.repeat.subTitle')}</ItemDescription>
                </ItemArea>
            </Item>
          </Items>
        </Group>
      </Content>
    </Wrapper>
  );
}