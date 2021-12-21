import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { addAction } from '@store/modules/deck/actions';
import { Wrapper, Content, SubTitle, Actions } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';

export default function AddDecks() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function createSessionClick() {    
    dispatch(addAction());
  }

  return (
    <Wrapper>
      <Content>
        <SubTitle>{t("decks.add")}</SubTitle>
        <Actions>
          <ButtonPrimary content={t("actions.createSession")} action={createSessionClick}></ButtonPrimary>
        </Actions>
      </Content>
    </Wrapper>
  );
}