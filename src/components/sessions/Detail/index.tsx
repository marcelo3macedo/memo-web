import IconSmall from '@components/icons/IconSmall';

import { Content, Title, Wrapper } from './styles';

export default function Detail({ icon, title }: any) {
  if (!title) return <></>;

  return (
    <Wrapper>
      <Content>
        <IconSmall name={icon} />
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}
