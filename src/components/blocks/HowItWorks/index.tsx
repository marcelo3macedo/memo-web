import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';
import help01 from "@assets/help/help01.png";
import help02 from "@assets/help/help02.png";
import help03 from "@assets/help/help03.png";
import help04 from "@assets/help/help04.png";
import help05 from "@assets/help/help05.png";

import { Wrapper, Content, Header, Title, Cards, Card, CardImage, CardText } from './styles';

export default function HowItWorks() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Header>
          <IconMedium name="question" />
          <Title>{t('howItWorks.title')}</Title>
        </Header>
        <Cards>
          <Card>
            <CardImage src={help01} />
            <CardText>{t('howItWorks.card01')}</CardText>
          </Card>
          <Card>
            <CardImage src={help02} />
            <CardText>{t('howItWorks.card02')}</CardText>
          </Card>
          <Card>
            <CardImage src={help03} />
            <CardText>{t('howItWorks.card03')}</CardText>
          </Card>
          <Card>
            <CardImage src={help04} />
            <CardText>{t('howItWorks.card04')}</CardText>
          </Card>
          <Card>
            <CardImage src={help05} />
            <CardText>{t('howItWorks.card05')}</CardText>
          </Card>
        </Cards>
      </Content>
    </Wrapper>
  );
}