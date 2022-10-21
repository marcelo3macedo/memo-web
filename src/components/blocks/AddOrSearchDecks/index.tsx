import React from 'react';
import { useDispatch } from 'react-redux';

import SearchDecks from '@components/blocks/SearchDecks';
import { PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content } from './styles';

export default function AddOrSearchDecks() {
  const dispatch = useDispatch();
  
  function searchClick({ query }) {
    dispatch(navigatePush({ path: `${PATH_GALLERY}/${query}` }));
  }

  return (
    <Wrapper>
      <Content>
        <SearchDecks action={searchClick} />
      </Content>
    </Wrapper>
  );
}