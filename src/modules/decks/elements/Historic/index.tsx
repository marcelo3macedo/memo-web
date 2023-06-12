import React from 'react';
import { useTranslation } from 'react-multi-lang';

import HistoricItem from '../HistoricItem';

import { Wrapper, Content, Title, Options } from './styles';

export default function Historic({ historic }: any) {
  const t = useTranslation();

  if (!historic) {
    return <></>;
  }

  const { sessionsCompleted, cardsReviewed, themesViewed, retention } =
    historic;

  return (
    <Wrapper>
      <Content>
        <Title>{t('history.title')}</Title>

        <Options>
          <HistoricItem
            title={sessionsCompleted}
            description={t('historic.sessionsCompleted')}
          />
          <HistoricItem
            title={cardsReviewed}
            description={t('historic.cardsReviewed')}
          />
          <HistoricItem
            title={themesViewed}
            description={t('historic.themesViewed')}
          />
          <HistoricItem
            title={`${retention}%`}
            description={t('historic.retention')}
          />
        </Options>
      </Content>
    </Wrapper>
  );
}
