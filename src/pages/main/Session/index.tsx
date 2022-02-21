import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Header, SubTitle, Description, Info, Frequency, Action, Themes, ThemeTitle, Card, CardName } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { reviewAction } from '@store/modules/session/actions';
import { formatDateField } from '@services/Format';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const session:any = useSelector((state:RootState) => state.session.session);
  const frequency = session && session.deck && session.deck.frequency ? session.deck.frequency.name : ''
  
  function reviewClick() {
    dispatch(reviewAction());
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
          {session.cards ? 
            session.cards.map(i => i.title)
              .filter((value, index, self) => {
                return self.indexOf(value) === index;
              }).map(d => (
                <Card key={d} className='no-select'>
                  <CardName>{d}</CardName>
                </Card>
              ))
            : <></>
          }
        </Themes>
      </Content>
    </Wrapper>
  ); 
}