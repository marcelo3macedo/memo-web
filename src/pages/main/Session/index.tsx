import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Header, SubTitle, Action, Themes, ThemeTitle, Card, CardName } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { reviewAction } from '@store/modules/session/actions';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const session:any = useSelector((state:RootState) => state.session.session);

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
          <SubTitle>{t('decks.title')}</SubTitle>
          <Title>{session.deck.name}</Title>
        </Header>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>

        <Themes>
          <ThemeTitle>{t('decks.themeTitle')}</ThemeTitle>
          {session.cards ? 
            session.cards.map(i => i.title)
              .filter((value, index, self) => {
                return self.indexOf(value) == index;
              }).map(d => (
                <Card key={d}>
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