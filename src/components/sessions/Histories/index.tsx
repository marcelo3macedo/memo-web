import Moment from 'moment';
import { useTranslation } from 'react-multi-lang';

import { Content, History, HistoryArea, Info, Title, Wrapper } from './styles';

export default function Histories({ sessions }: any) {
  const t = useTranslation();

  if (!sessions) {
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
