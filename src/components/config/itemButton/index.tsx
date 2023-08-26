import SecondaryButton from '@components/elements/buttons/Secondary';
import { HeaderText } from '@components/elements/texts/header';

import { Button, Container } from './styles';

export function ItemButton({ title, value, action }: any) {
  return (
    <Container>
      <HeaderText value={title} />
      <Button>
        <SecondaryButton content={value} action={action} />
      </Button>
    </Container>
  );
}
