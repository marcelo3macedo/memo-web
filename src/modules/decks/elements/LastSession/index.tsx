import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SessionItem from '../SessionItem';

import { Wrapper, Content, Title, Options } from './styles';

export default function LastSession() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('lastReview.title')}</Title>

        <Options>
          <SessionItem
            title={'87%'}
            description={'retenção do conteúdo'}
            layout='full'
          />
          <SessionItem title={''} description={'Realizada há 2 dias'} />
          <SessionItem title={''} description={'40 cards visualizados'} />
        </Options>
      </Content>
    </Wrapper>
  );
}
