import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonSecondary from '@components/button/ButtonSecondary';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_MYDECKS } from '@services/Navigation';

import { Wrapper, Content, Footer, Block, Header, Title } from './styles';
import Carousel from '@components/sessions/Carousel';
import IconLarge from '@components/icons/IconLarge';

export default function OpenSessions({ sessions }) {
  const dispatch = useDispatch();
  const t = useTranslation();
  const show = sessions && sessions.length > 0;
  const hasMore = sessions && sessions.length > 5;
  
  function seeMoreClick() {
    dispatch(navigatePush({ path: PATH_MYDECKS }));
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <IconLarge name="card" />
          <Title>{t('session.active')}</Title>
        </Header>

        <Carousel sessions={sessions} />

        {hasMore ? (
          <Footer>
            <Block></Block>
            <Block>            
              <ButtonSecondary content={t('decks.seeMore')} action={seeMoreClick} /> 
            </Block>
          </Footer>
        ) : <></>}
      </Content>
    </Wrapper>
  );
}