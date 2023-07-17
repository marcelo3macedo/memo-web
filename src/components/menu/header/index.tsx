import { DetailsText } from '@components/elements/texts/details';
import { FeaturedText } from '@components/elements/texts/featured';
import { Styles } from '@interfaces/texts/TextProps';

import { Content, Description, Title, Wrapper } from './styles';

export default function MenuHeader({ title, description }) {
  return (
    <Wrapper>
      <Content>
        <Title>
          <FeaturedText value={title} styled={Styles.Pallete02} />
        </Title>
        <Description>
          <DetailsText value={description} styled={Styles.Pallete01} />
        </Description>
      </Content>
    </Wrapper>
  );
}
