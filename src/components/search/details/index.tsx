import { SubtitleText } from '@components/elements/texts/subtitle';
import { PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { SearchPrimary } from '../primary';

import { Content, Header, Wrapper } from './styles';

export function DetailsSearch() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function searchHandler(e) {
    dispatch(
      navigatePush({
        route: null,
        path: `${PATH_GALLERY}?query=${e}`
      })
    );
  }

  return (
    <Wrapper className="no-select">
      <Content>
        <Header>
          <SubtitleText value={t('home.search')} />
        </Header>
        <SearchPrimary placeholder={t('home.search')} action={searchHandler} />
      </Content>
    </Wrapper>
  );
}
