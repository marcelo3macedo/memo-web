import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { RootState } from '@store/modules/rootReducer';
import ButtonSecondary from '@components/button/ButtonSecondary';
import SessionGallery from '@components/blocks/SessionGallery';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_MYDECKS } from '@services/Navigation';

import { Wrapper, Content, Footer, Block } from './styles';

export default function PendingDecks() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const sessions = useSelector((state:RootState) => state.resume.sessions);
  const show = sessions && sessions.length > 0;
  
  function seeMoreClick() {
    dispatch(navigatePush({ path: PATH_MYDECKS }));
  }

  return (
    <Wrapper show={show}>
      <Content>
        <SessionGallery sessions={sessions} />
        {sessions && sessions.length > 5 ? (
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