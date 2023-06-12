import IconMedium from '@components/icons/IconMedium';
import IconSmall from '@components/icons/IconSmall';
import { searchAction as searchMenuAction } from '@store/modules/menu/actions';
import { RootState } from '@store/modules/rootReducer';
import { searchAction } from '@store/modules/search/actions';
import { useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import {
  CloseArea,
  Content,
  Field,
  Footer,
  FooterTitle,
  Header,
  Wrapper,
} from './styles';

export default function SearchPrimary() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const show = useSelector((state: RootState) => state.menu.search);

  function closeSearchClick() {
    dispatch(searchMenuAction());
  }

  function searchClick() {
    dispatch(searchAction({ term }));
    setTerm('');
    closeSearchClick();
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Field
            type='text'
            className='input'
            onChange={e => setTerm(e.target.value)}
            placeholder={t('decks.searchPlaceholder')}
            value={term}
          />
          <IconMedium
            name='search'
            onClick={() => {
              searchClick();
            }}
          />
        </Header>
        <Footer>
          <FooterTitle>{t('searchDeck.title')}</FooterTitle>
          <CloseArea
            onClick={() => {
              closeSearchClick();
            }}>
            <IconSmall name='delete' />
          </CloseArea>
        </Footer>
      </Content>
    </Wrapper>
  );
}
