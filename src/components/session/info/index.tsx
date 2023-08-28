import { HeaderText } from '@components/elements/texts/header';
import { TitleText } from '@components/elements/texts/title';

import { Content, Header, Wrapper } from './styles';

export function InfoSession({ title, details }: any) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <HeaderText value={title} />
        </Header>
        <TitleText value={details} />
      </Content>
    </Wrapper>
  );
}
