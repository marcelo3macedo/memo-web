import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, SubTitle, Search, SearchInput } from './styles';

export default function SearchDecks({ title, subTitle }) {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        <Search>
          <SearchInput/>
          <IconSmall name={"user"} />
        </Search>
      </Content>
    </Wrapper>
  );
}