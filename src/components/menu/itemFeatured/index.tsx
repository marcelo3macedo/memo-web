import { HeaderText } from '@components/elements/texts/header';
import IconSmall from '@components/icons/IconSmall';
import { Styles } from '@interfaces/texts/TextProps';
import { useTheme } from 'styled-components';

import { Content, Footer, Header, Wrapper } from './styles';

export function ItemFeaturedMenu({ title }: any) {
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select">
      <Content>
        <Header>
          <HeaderText value={title} styled={Styles.Light} />
        </Header>
        <Footer>
          <IconSmall name={'nextRepo'} fill={theme.LIGHT_COLOR} />
        </Footer>
      </Content>
    </Wrapper>
  );
}
