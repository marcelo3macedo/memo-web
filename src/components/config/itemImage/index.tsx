import { InfoImage } from '@components/elements/images/info';
import { SubtitleText } from '@components/elements/texts/subtitle';

import { Container, Details } from './styles';

export function ItemImage({ logo, value }: any) {
  return (
    <Container>
      <InfoImage src={logo} />
      <Details>
        <SubtitleText value={value} />
      </Details>
    </Container>
  );
}
