import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { RootState } from '@store/modules/rootReducer';
import ButtonSecondary from '@components/button/ButtonSecondary';
import DecksGallery from '@components/blocks/DecksGallery';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_MYDECKS } from '@services/Navigation';

import { Wrapper, Content, Footer, Block } from './styles';

export default function PendingDecks() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const decks = useSelector((state:RootState) => state.resume.decks);
  const show = decks.length > 0;

  function seeMoreClick() {
    dispatch(navigatePush({ path: PATH_MYDECKS }));
  }

  return (
    <Wrapper show={show}>
      <Content>
        <DecksGallery decks={decks} />
        <Footer>
          <Block></Block>
          <Block><ButtonSecondary content={t('decks.seeMore')} action={seeMoreClick} /></Block>
        </Footer>
      </Content>
    </Wrapper>
  );
}