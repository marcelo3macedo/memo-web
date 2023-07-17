import logo from '@assets/logo.png';
import { LogoImage } from '@components/elements/images/logo';

import { Content, Header, Wrapper } from './styles';

export function AuthTheme({ children }: any) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <LogoImage src={logo} />
        </Header>
        {children}
      </Content>
    </Wrapper>
  );
}
