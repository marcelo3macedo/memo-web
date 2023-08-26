import { SmallLoading } from '@components/elements/loading/small';
import { TitleText } from '@components/elements/texts/title';
import { ItemFilter } from '@components/filters/item';
import IconMedium from '@components/icons/IconMedium';
import { DECK_FILTER_MODAL } from '@constants/deck';
import { extractFilters } from '@helpers/FiltersHelper';
import { searchAction } from '@store/modules/galleries/actions';
import { RootState } from '@store/modules/rootReducer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { CloseArea, Container, Header, Items, Modal } from './styles';

export function FiltersModal({ modal, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { filters, loading } = useSelector((state: RootState) => state.filters);
  const [filterSelected, setFilterSelected] = useState(null);
  const data = extractFilters(filters);

  if (loading) {
    return <SmallLoading />;
  }

  function actionHandler(item: any) {
    if (item.name === filterSelected) {
      return setFilterSelected(null);
    }
    setFilterSelected(item.name);
  }

  function selectHandler(value: string) {
    dispatch(searchAction({ value }));
    closeAction();
    setFilterSelected(null);
  }

  return (
    <Container show={modal === DECK_FILTER_MODAL}>
      <Modal>
        <Header>
          <TitleText value={t('filters.title')} />
          <CloseArea onClick={closeAction}>
            <IconMedium name={'close'} />
          </CloseArea>
        </Header>
        <Items>
          {data.map((s: any, i: number) => (
            <ItemFilter
              key={i}
              item={s}
              selected={filterSelected}
              action={actionHandler}
              selectAction={selectHandler}
            />
          ))}
        </Items>
      </Modal>
    </Container>
  );
}
