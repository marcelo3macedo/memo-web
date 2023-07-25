import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';

import { Content, Title } from './styles';

export function DetailsDecks({ title, value }: any) {
  return (
    <Content>
      <FeaturedText value={title} />
      <Title>
        <SubtitleText value={value} />
      </Title>
    </Content>
  );
}
