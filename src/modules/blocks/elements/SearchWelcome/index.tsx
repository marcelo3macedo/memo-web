import SearchBox from '@modules/components/elements/SearchBox';
import { PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Wrapper, Content, Title } from './styles';

export default function SearchWelcome() {
  const t = useTranslation();
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
