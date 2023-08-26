import { HeaderText } from '@components/elements/texts/header';

import { Checkbox, Container } from './styles';

export function ItemCheckboxConfig({ title, value, action }: any) {
  return (
    <Container>
      <HeaderText value={title} />
      <Checkbox type="checkbox" checked={value} onChange={action} />
    </Container>
  );
}
