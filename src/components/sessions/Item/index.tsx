import IconMedium from '@components/icons/IconMedium';
import { getTimeFromNow } from '@helpers/DateHelper';

import Detail from '../Detail';

import {
  Action,
  Card,
  Content,
  Footer,
  Header,
  Title,
  Wrapper,
} from './styles';

export default function Item({ session }: any) {
  const { deck } = session || {};

  return (
    <Wrapper>
      <Content>
        <Card>
          <Header>
            <Title>{deck.name}</Title>
          </Header>
          <Footer>
            <Detail icons={'time'} title={getTimeFromNow(session.createdAt)} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={'next'} />
        </Action>
      </Content>
    </Wrapper>
  );
}
