import React from 'react';
import { useTranslation } from 'react-multi-lang';

import question from '@assets/help/question.png';

import { Wrapper, Content, Picture, Message, Title, Subtitle } from './styles';

export default function SessionDoubt() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Picture src={question} />
        <Message>
          <Title>{t('session.doubtAboutReview')}</Title>
          <Subtitle>{t('session.seeOurTutorial')}</Subtitle>
        </Message>
      </Content>
    </Wrapper>
  );
}