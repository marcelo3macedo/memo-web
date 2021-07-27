import React from 'react';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, SubTitle, Search, SearchInput } from './styles';

export default function SearchDecks({ title, subTitle }) {
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