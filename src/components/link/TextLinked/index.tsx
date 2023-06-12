import { TextValue, Wrapper } from './styles';

export default function TextLinked({ content, action = null }: any) {
  return (
    <Wrapper onClick={action}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}
