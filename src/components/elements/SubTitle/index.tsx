import { Content, Wrapper } from './styles';

export default function SubTitle({ title }: any) {
  return (
    <Wrapper>
      <Content>{title}</Content>
    </Wrapper>
  );
}
