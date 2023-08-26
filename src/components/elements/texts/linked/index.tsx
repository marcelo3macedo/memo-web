import { TextValue, Wrapper } from './styles';

export default function LinkedText({ content, action = null }) {
  return (
    <Wrapper onClick={action}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}
