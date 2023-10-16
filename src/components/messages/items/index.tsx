import { Item } from '../item';

import { Container, Wrapper } from './styles';

export function Items({ data, slug }: any) {
  return (
    <Wrapper className="no-select">
      <Container>
        {data.map((d, i) => (
          <Item key={i} item={d} slug={slug} />
        ))}
      </Container>
    </Wrapper>
  );
}
