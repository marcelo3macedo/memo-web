import { HeaderText } from '@components/elements/texts/header';

import { Content } from './styles';

export function ItemProgress({ title, value }: any) {
  return (
    <Content>
      <HeaderText value={title} />
      <HeaderText value={value} />
    </Content>
  );
}
