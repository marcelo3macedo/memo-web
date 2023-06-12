import project2 from '@assets/banners/project2.png';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Group, Picture, Title, TitleArea } from './styles';

export default function Technique() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Group>
          <TitleArea>
            {t('home.blockTechnique.title')
              .split('|')
              .map((v, index) => (
                <Title key={index}>{v}</Title>
              ))}
          </TitleArea>
        </Group>
        <Group>
          <Picture src={project2} alt={t('application.name')} />
        </Group>
      </Content>
    </Wrapper>
  );
}
