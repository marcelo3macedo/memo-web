import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { addAction } from '@store/modules/deck/actions';
import { Wrapper, Content, SubTitle, Actions } from './styles';
import ButtonFeatured from '@components/button/ButtonFeatured';

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
          <ButtonFeatured content={t("actions.createSession")} action={createSessionClick}></ButtonFeatured>
        </Actions>
      </Content>
    </Wrapper>
  );
}