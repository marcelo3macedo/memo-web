import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Header, Category, CategoryArea, Title } from './styles';

export default function Categories({ categories, categoryAction }) {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content className='no-select'>
        <Header>{t('searchDeck.category')}</Header>

        <CategoryArea>
          {categories.map(d => (
            <Category key={d.id} onClick={() => { categoryAction(d.name) }}>
              <Title>{d.name}</Title>
            </Category>
          ))}
        </CategoryArea>
      </Content>
    </Wrapper>
  );
}