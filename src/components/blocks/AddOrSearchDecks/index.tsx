import React from 'react';
import { useDispatch } from 'react-redux';

import AddDecks from '../AddDecks';
import SearchDecks from '@components/blocks/SearchDecks';
import { PATH_GALLERY } from '@services/Navigation';
import { addAction } from '@store/modules/deck/actions';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content } from './styles';

export default function AddOrSearchDecks() {
  const dispatch = useDispatch();
  
  function searchClick({ query }) {
    dispatch(navigatePush({ path: `${PATH_GALLERY}/${query}` }));
  }

  function createSessionClick() {    
    dispatch(addAction());
  }

  return (
    <Wrapper>
      <Content>
        <SearchDecks action={searchClick} />
        <AddDecks action={createSessionClick} />
      </Content>
    </Wrapper>
  );
}