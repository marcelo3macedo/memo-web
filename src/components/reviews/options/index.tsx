import SecondaryButton from '@components/elements/buttons/Secondary';

import { Container, Options } from './styles';

export function OptionsReview({ options, action }: any) {
  if (!options || options.length === 0) {
    return <></>;
  }

  function selectedOption(id: any) {
    action(id);
  }

  return (
    <Container>
      {options.map((o: any, i: number) => (
        <Options key={i}>
          <SecondaryButton
            content={o.name}
            action={() => {
              selectedOption(o.id);
            }}
          />
        </Options>
      ))}
    </Container>
  );
}
