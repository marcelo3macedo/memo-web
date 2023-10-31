import ColoredAnimatedButton from '@components/elements/buttons/ColoredAnimated';
import { getColorByLevel } from '@helpers/LevelHelpers';

import { Wrapper, Container } from './styles';

export function ActionLevel({ content, action }: any) {
  const color = getColorByLevel(content);

  return (
    <Wrapper>
      <Container>
        <ColoredAnimatedButton
          content={content}
          action={action}
          color={color}
        />
      </Container>
    </Wrapper>
  );
}
