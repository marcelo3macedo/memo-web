import React from 'react';
import { useTranslation } from 'react-multi-lang';

import tutorialCard01 from '@assets/pages/tutorial/tutorialCard01.png';
import tutorialCard02 from '@assets/pages/tutorial/tutorialCard02.png';
import ReviewItem from '../ReviewItem';

import { Wrapper, Content, Title, Items } from './styles';

export default function Review() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('tutorial.reviewTitle')}</Title>
        <Items>
          <ReviewItem 
            position='1'
            title={t('tutorial.analyse')}
            description={t('tutorial.analyseDescription')}
            imageUrl={tutorialCard01}
          />

          <ReviewItem 
            position='2'
            title={t('tutorial.answer')}
            description={t('tutorial.answerDescription')}
            imageUrl={tutorialCard02}
          />

          <ReviewItem 
            position='3'
            title={t('tutorial.rate')}
            description={t('tutorial.rateDescription')}
          />
        </Items>
      </Content>
    </Wrapper>
  );
}