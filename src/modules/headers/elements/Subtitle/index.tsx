import ISubtitle from '@modules/headers/dtos/ISubtitle';

import { Content, Wrapper } from './styles';

export default function Subtitle({ title }: ISubtitle) {
  return (
    <Wrapper>
      <Content>{title}</Content>
    </Wrapper>
  );
}
