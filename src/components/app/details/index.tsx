import { FeaturedText } from '@components/elements/texts/featured';
import { Styles } from '@interfaces/texts/TextProps';

import { Item, Wrapper } from './styles';

export default function DetailsApp() {
  return (
    <Wrapper>
      <Item>
        <FeaturedText value={'Memorizou'} styled={Styles.Pallete01} />
      </Item>
    </Wrapper>
  );
}
