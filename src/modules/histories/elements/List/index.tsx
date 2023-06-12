import IListHistories from '@modules/histories/dtos/IListHistories';
import Moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, HistoryArea, History, Title, Info } from './styles';

export default function List({ sessions }: IListHistories) {
  const t = useTranslation();

  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <HistoryArea>
          {sessions.map((d, i) => (
            <History key={i}>
              <Title>
                <Info>{t('history.dateColumn')}</Info>{' '}
                {Moment(d.createdAt).format('DD /MM/YYYY')}
              </Title>
              <Title>
                <Info>{t('history.sessionColumn')}</Info> {d.deck.name}
              </Title>
              <Title>
                <Info>{t('history.reviewCardsColumn')}</Info> {d.sessionCards}
              </Title>
            </History>
          ))}
        </HistoryArea>
      </Content>
    </Wrapper>
  );
}
