import PrimaryIconedButton from '@components/elements/buttons/PrimaryIconed';
import { searchAction } from '@store/modules/galleries/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { SearchPrimary } from '../primary';

import { Button, Content, Wrapper } from './styles';

export function SearchWithFilter({ action, value = '' }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function searchHandler(e) {
    dispatch(searchAction({ value: e }));
  }

  return (
    <Wrapper className="no-select">
      <Content>
        <SearchPrimary
          value={value}
          placeholder={t('gallery.titleSearch')}
          action={searchHandler}
        />
      </Content>
      <Button>
        <PrimaryIconedButton
          content={t('gallery.filters')}
          icon={'filtered'}
          action={action}
        />
      </Button>
    </Wrapper>
  );
}
