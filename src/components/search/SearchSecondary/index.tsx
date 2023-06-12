import IconMedium from '@components/icons/IconMedium';
import { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import { Content, SearchInput, Wrapper } from './styles';

export default function SearchSecondary({ searchAction }) {
  const t = useTranslation();
  const [term, setTerm] = useState('');

  return (
    <Wrapper>
      <Content>
        <SearchInput
          onChange={e => setTerm(e.target.value)}
          placeholder={t('searchDeck.placeholder')}></SearchInput>
        <IconMedium
          name='search'
          onClick={() => {
            searchAction(term);
          }}
        />
      </Content>
    </Wrapper>
  );
}
