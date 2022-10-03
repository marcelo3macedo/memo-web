import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import SearchDeck from '@components/decks/Search';

import { Content, SearchTitle, Wrapper } from './styles';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_SESSIONS } from '@services/Navigation';
import { useTranslation } from 'react-multi-lang';

export default function SessionSearch() {
    const t = useTranslation()
    const dispatch = useDispatch()
    const location = useLocation()
    const { search } = queryString.parse(location.search) || {}

    function searchEvent(term) {
        dispatch(navigatePush({ path: `${PATH_SESSIONS}?search=${term}` }));
    }

    return (
      <Wrapper>
        <Content>
            <SearchDeck action={searchEvent} />
            { search ? <SearchTitle>{`${t('search.results')} ${search}`}</SearchTitle> : <></>}
        </Content>
      </Wrapper>
    )
}