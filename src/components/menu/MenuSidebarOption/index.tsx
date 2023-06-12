import IconMedium from '@components/icons/IconMedium';

import { Content, Header, Info, Title, Wrapper } from './styles';

export default function MenuSidebarOption({
  icon,
  content,
  action = null,
}: any) {
  return (
    <Wrapper className='no-select' onClick={action}>
      <Content>
        <Header>
          <IconMedium name={icon} />
        </Header>
        <Info className='options'>
          <Title>{content}</Title>
        </Info>
      </Content>
    </Wrapper>
  );
}
