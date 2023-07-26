import { searchAction } from '@store/modules/sessions/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { SearchPrimary } from '../primary';

import { Content, Wrapper } from './styles';

export function SearchPrivate() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function searchHandler(e) {
    dispatch(searchAction({ value: e }));
  }

  return (
    <Wrapper className="no-select">
      <Content>
        <SearchPrimary
          placeholder={t('gallery.titleSearch')}
          action={searchHandler}
        />
      </Content>
    </Wrapper>
  );
}
