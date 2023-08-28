import { PictureProps } from '@interfaces/components/pictures/PictureProps';

import { Picture, Wrapper } from './styles';

export function TutorialImage({ source, action }: PictureProps) {
  return (
    <Wrapper onClick={action}>
      <Picture src={source} />
    </Wrapper>
  );
}
