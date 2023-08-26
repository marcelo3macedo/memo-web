import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';

import { Container, Options } from './styles';

export function ResultsReview({ options, answered }: any) {
  if (!options || options.length === 0) {
    return <></>;
  }

  function getResults(id: string) {
    return answered.filter((a: any) => a.difficultyId === id).length;
  }

  return (
    <Container>
      {options.map((o: any, i: number) => (
        <Options key={i}>
          <TitleText value={getResults(o.id)} />
          <FeaturedText value={o.name} />
        </Options>
      ))}
    </Container>
  );
}
