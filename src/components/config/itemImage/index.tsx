import { InfoImage } from '@components/elements/images/info';
import { SubtitleText } from '@components/elements/texts/subtitle';

import { Container } from './styles';

export function ItemImage({ logo, value }: any) {
  return (
    <Container>
      <InfoImage source={logo} />
      <SubtitleText value={value} />
    </Container>
  );
}
