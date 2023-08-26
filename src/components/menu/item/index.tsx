import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { useTheme } from 'styled-components';

import { Content, Footer, Header, Wrapper } from './styles';

export function ItemMenu({ title, action }: any) {
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <SubtitleText value={title} />
        </Header>
        <Footer>
          <IconMedium name={'nextRepo'} fill={theme.GRAY_COLOR} />
        </Footer>
      </Content>
    </Wrapper>
  );
}
