import SearchBox from '@modules/components/elements/SearchBox';
import { queryAction } from '@store/modules/gallery/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper, Content } from './styles';

export default function SearchGallery() {
  const dispatch = useDispatch();

  function searchClick({ query }) {
    dispatch(queryAction({ query }));
  }

  return (
    <Wrapper>
      <Content>
        <SearchBox action={searchClick} />
      </Content>
    </Wrapper>
  );
}
