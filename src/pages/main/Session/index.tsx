import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { formatDateField } from '@services/Format';
import { RootState } from '@store/modules/rootReducer';
import { indexAction } from '@store/modules/sessions/actions';
import PageLoading from '@components/loading/PageLoading';
import { loadAction } from '@store/modules/review/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_REVIEW } from '@services/Navigation';

import { Wrapper, Content, Title, Header, SubTitle, Description, Info, Frequency, Action, Themes, ThemeTitle, Card, CardName } from './styles';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { isLoading, session } = useSelector((state:RootState) => state.sessions);
  const frequency = session && session.deck && session.deck.frequency ? session.deck.frequency.name : '';
  const { id } = useParams() as any;
  
  function reviewClick() {
    dispatch(loadAction({ session }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  useEffect(() => {
    dispatch(indexAction({ id }));  
  }, [dispatch, id]);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!session || !session.deck) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Info>{t('decks.title')}</Info>
          <Title>{session.deck.name}</Title>
          <Frequency>{t('session.frequency')} {frequency}</Frequency>
          <SubTitle>{t('session.createdAt')} {formatDateField(session.createdAt)}</SubTitle>
        </Header>
        <Description>{session.deck.description}</Description>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>

        <Themes>
          <ThemeTitle>{t('decks.themeTitle')}</ThemeTitle>
          { session.cards ? 
            session.cards.map(i => i.title)
              .filter((value, index, self) => {
                return self.indexOf(value) === index;
              }).map(d => (
                <Card key={d} className='no-select'>
                  <CardName>{d}</CardName>
                </Card>
              ))
            : <></> }
        </Themes>
      </Content>
    </Wrapper>
  ); 
}