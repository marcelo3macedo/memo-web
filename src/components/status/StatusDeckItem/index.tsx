import IconSmall from '@components/icons/IconSmall';

import { Content, Title, Wrapper } from './styles';

export default function StatusDeckItem({ icon, value }: any) {
  if (!value) return <></>;

  return (
    <Wrapper>
      <Content>
        <IconSmall name={icon} />
        <Title>{value}</Title>
      </Content>
    </Wrapper>
  );
}
