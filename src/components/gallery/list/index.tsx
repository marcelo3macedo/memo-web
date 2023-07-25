import { SmallLoading } from '@components/elements/loading/small';
import { PrimaryPagination } from '@components/elements/pagination/primary';

import Private from '../Private';
import Public from '../Public';

import {
  Content,
  DeckComponent,
  DeckWrapper,
  Pagination,
  Wrapper
} from './styles';

export default function ListGallery({
  sessions = [],
  loading,
  type,
  pages,
  actualPage
}) {
  if (loading) {
    return <SmallLoading />;
  }

  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  function loadMore() {}

  return (
    <Wrapper>
      <Content>
        {sessions.map(d => (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              {type === 'private' ? <Private deck={d} /> : <Public deck={d} />}
            </DeckComponent>
          </DeckWrapper>
        ))}
      </Content>
      <Pagination>
        <PrimaryPagination
          actualPage={actualPage}
          pages={pages}
          action={loadMore}
        />
      </Pagination>
    </Wrapper>
  );
}
