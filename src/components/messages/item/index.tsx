import { SubtitleText } from '@components/elements/texts/subtitle';
import { startAction } from '@store/modules/messages/actions';
import { useDispatch } from 'react-redux';

import { Wrapper, Container, Card } from './styles';

export function Item({ item, slug }: any) {
  const dispatch = useDispatch();

  function action() {
    dispatch(startAction({ category: item, slug }));
  }

  return (
    <Wrapper onClick={action}>
      <Container>
        <Card>
          <SubtitleText value={item} />
        </Card>
      </Container>
    </Wrapper>
  );
}
