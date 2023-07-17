import { DetailsText } from '@components/elements/texts/details';
import IconMedium from '@components/icons/IconMedium';
import { Styles } from '@interfaces/texts/TextProps';

import { Content, Header, Info, Wrapper } from './styles';

export default function MenuOption({ icon, content, action = null }) {
  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <IconMedium name={icon} />
        </Header>
        <Info>
          <DetailsText value={content} styled={Styles.Pallete01} />
        </Info>
      </Content>
    </Wrapper>
  );
}
