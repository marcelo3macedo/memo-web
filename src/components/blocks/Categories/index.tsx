import React from 'react';

import { searchAction } from '@store/modules/search/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Wrapper, Content, Header, Category, CategoryArea, Title } from './styles';

export default function Categories({ data }) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function doSearch(term) {
    dispatch(searchAction({ term }));
  }

  if (!data) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content className='no-select'>
        <Header>{t('searchDeck.category')}</Header>

        <CategoryArea>
          {data.map(d => (
            <Category key={d.id} onClick={() => { doSearch(d.name) }}>
              <Title>{d.name}</Title>
            </Category>
          ))}
        </CategoryArea>
      </Content>
    </Wrapper>
  );
}