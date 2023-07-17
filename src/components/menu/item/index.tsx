import { HeaderText } from '@components/elements/texts/header';
import IconSmall from '@components/icons/IconSmall';
import { useTheme } from 'styled-components';

import { Content, Footer, Header, Wrapper } from './styles';

export function ItemMenu({ title }: any) {
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select">
      <Content>
        <Header>
          <HeaderText value={title} />
        </Header>
        <Footer>
          <IconSmall name={'nextRepo'} fill={theme.PRIMARY_COLOR} />
        </Footer>
      </Content>
    </Wrapper>
  );
}
