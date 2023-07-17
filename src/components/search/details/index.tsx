import { SubtitleText } from '@components/elements/texts/subtitle';
import { useTranslation } from 'react-i18next';

import { SearchPrimary } from '../primary';

import { Content, Header, Wrapper } from './styles';

export function DetailsSearch() {
  const { t } = useTranslation();

  return (
    <Wrapper className="no-select">
      <Content>
        <Header>
          <SubtitleText value={t('home.search')} />
        </Header>
        <SearchPrimary />
      </Content>
    </Wrapper>
  );
}
