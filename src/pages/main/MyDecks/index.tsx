import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadDecks } from '@store/modules/personal/actions';
import DecksColumn from '@components/blocks/DecksColumn';

import { Wrapper, Content, Title } from './styles';
import { RootState } from '@store/modules/rootReducer';

export default function MyDecks() {
  const dispatch = useDispatch();
  const { decks } = useSelector((state:RootState) => state.personal);

  useEffect(() => {
    dispatch(loadDecks());
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>Meus Decks</Title>
        <DecksColumn decks={decks} />
      </Content>
    </Wrapper>
  ); 
}