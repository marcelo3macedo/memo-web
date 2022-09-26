import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import SearchBox from '@modules/components/elements/SearchBox';
import { PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Title } from './styles';

export default function SearchWelcome() {
  const t = useTranslation()
  const dispatch = useDispatch();
  
  function searchClick({ query }) {
    dispatch(navigatePush({ path: `${PATH_GALLERY}/${query}` }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.search')}</Title>
        <SearchBox action={searchClick} />
      </Content>
    </Wrapper>
  );
}