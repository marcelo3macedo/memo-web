import React from 'react';

import { useTranslation } from 'react-multi-lang';
import Moment from 'moment';

import { Wrapper, Content, HistoryArea, History, Title, Info } from './styles';

export default function Histories({ data }) {
  const t = useTranslation();

  if (!data) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <HistoryArea>
          {data.map(d => (
            <History>
              <Title><Info>{t('history.dateColumn')}</Info> {Moment(d.createdAt).format('d/MM/YYYY')}</Title>
              <Title><Info>{t('history.sessionColumn')}</Info> {d.deck.name}</Title>
              <Title><Info>{t('history.reviewCardsColumn')}</Info> {d.sessionCards}</Title>
            </History>            
          ))}
        </HistoryArea>
      </Content>
    </Wrapper>
  );
}