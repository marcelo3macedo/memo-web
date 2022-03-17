import React from 'react';
import { useTranslation } from 'react-multi-lang';
import Moment from 'moment';

import { Wrapper, Content, HistoryArea, History, Title, Info } from './styles';

export default function Histories({ sessions }) {
  const t = useTranslation();

  if (!sessions) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <HistoryArea>
          {sessions.map(d => (
            <History>
              <Title><Info>{t('history.dateColumn')}</Info> {Moment(d.createdAt).format('DD /MM/YYYY')}</Title>
              <Title><Info>{t('history.sessionColumn')}</Info> {d.deck.name}</Title>
              <Title><Info>{t('history.reviewCardsColumn')}</Info> {d.sessionCards}</Title>
            </History>            
          ))}
        </HistoryArea>
      </Content>
    </Wrapper>
  );
}