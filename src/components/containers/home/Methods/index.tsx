import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Group, SubTitle, Title, TitleArea, TextContainer } from './styles';

export default function Methods() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Group>
            <TitleArea>
              {t('home.blockMethods.title').split("|").map((v, index) =>(
                <Title key={index}>{v}</Title>
              ))}
              <SubTitle>{t('home.blockMethods.subTitle')}</SubTitle>

              {t('home.blockMethods.textContainer').split("|").map((v, index) =>(
                <TextContainer key={index}>{v}</TextContainer>
              ))}
            </TitleArea>
        </Group>
        <Group>
        </Group>
      </Content>
    </Wrapper>
  );
}