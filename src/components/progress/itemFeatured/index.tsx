import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';

import { Content } from './styles';

export function ItemFeatured({ title, value }: any) {
  return (
    <Content>
      <TitleText value={title} />
      <SubtitleText value={value} />
    </Content>
  );
}
