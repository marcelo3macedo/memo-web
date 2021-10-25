import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { RootState } from "@store/modules/rootReducer";

import { Wrapper, Content, Header, Field, CloseArea } from './styles';
import IconMedium from '@components/icons/IconMedium';
import { searchAction as searchMenuAction } from '@store/modules/menu/actions';
import { searchAction } from '@store/modules/search/actions';
import IconSmall from '@components/icons/IconSmall';

export default function SearchPrimary() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ term, setTerm ] = useState("");
  const show = useSelector((state:RootState) => state.menu.search);
  
  function closeSearchClick() {
    dispatch(searchMenuAction());
  }

  function searchClick() {
    dispatch(searchAction({ term }));
    setTerm("");
    closeSearchClick();
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header>
            <Field type="text" className="input" onChange={e=>setTerm(e.target.value)} placeholder={t("decks.searchPlaceholder")} value={term} />
            <IconMedium name="search" onClick={() => { searchClick() }} />
        </Header>
        <CloseArea onClick={() => { closeSearchClick() } }>
          <IconSmall name="delete"/>
        </CloseArea>
      </Content>
    </Wrapper>
  );
}