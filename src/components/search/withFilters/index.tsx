import PrimaryIconedButton from '@components/elements/buttons/PrimaryIconed';
import { useTranslation } from 'react-i18next';

import { SearchPrimary } from '../primary';

import { Button, Content, Wrapper } from './styles';

export function SearchWithFilter() {
  const { t } = useTranslation();

  return (
    <Wrapper className="no-select">
      <Content>
        <SearchPrimary placeholder={t('gallery.titleSearch')} />
      </Content>
      <Button>
        <PrimaryIconedButton content={t('gallery.filters')} icon={'filtered'} />
      </Button>
    </Wrapper>
  );
}
