import { PendingSession } from '@components/decks/pending';
import { SmallLoading } from '@components/elements/loading/small';
import { loadMoreAction } from '@store/modules/sessions/actions';
import { Key } from 'react';
import { useDispatch } from 'react-redux';

import { Pagination } from '../pagination';

import { Item, ItemWrapper, Items, Wrapper } from './styles';

export function ReviewList({ results, pages, actualPage, loading }: any) {
  const dispatch = useDispatch();

  if (loading) {
    return <SmallLoading />;
  }
  if (!results || results.length === 0) {
    return <></>;
  }

  function loadMore() {
    const page = actualPage++;
    dispatch(loadMoreAction({ page }));
  }

  function generateItem(s: any, i: Key) {
    const { deck } = s || {};
    return (
      <Item key={i}>
        <ItemWrapper>
          <PendingSession
            key={i}
            id={s.id}
            deckId={deck?.id}
            title={deck?.name}
            description={deck?.description}
            cardsCount={s.sessionCards}
            frequency={deck?.frequency?.name}
            isPublic={deck?.isPublic}
          />
        </ItemWrapper>
      </Item>
    );
  }

  const items = results.map((s: any, i: Key) => generateItem(s, i));
  return (
    <Wrapper>
      <Items>{items}</Items>
      <Pagination actualPage={actualPage} pages={pages} action={loadMore} />
    </Wrapper>
  );
}
