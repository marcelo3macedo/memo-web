import IconSmall from "@components/icons/IconSmall";
import { Content, Header, Info, Title, Wrapper } from './styles';

export default function MenuOption({ icon, content, action=null }:any) {
  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <IconSmall name={icon}/>
        </Header>
        <Info>
          <Title>{content}</Title>
        </Info>
      </Content>
    </Wrapper>
  );
}