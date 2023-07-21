import Private from '../Private';
import Public from '../Public';

import { Content, DeckComponent, DeckWrapper, Wrapper } from './styles';

export default function ListGallery({ sessions = [], type }) {
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
    </Wrapper>
  );
}
