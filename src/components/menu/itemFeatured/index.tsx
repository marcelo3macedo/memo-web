import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { Styles } from '@interfaces/texts/TextProps';
import { useTheme } from 'styled-components';

import { Content, Footer, Header, Wrapper } from './styles';

export function ItemFeaturedMenu({ title, action }: any) {
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <SubtitleText value={title} styled={Styles.Light} />
        </Header>
        <Footer>
          <IconMedium name={'nextRepo'} fill={theme.LIGHT_COLOR} />
        </Footer>
      </Content>
    </Wrapper>
  );
}
