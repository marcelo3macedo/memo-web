import logo from '@assets/logos/logo-named.png';

import { Content, Picture, Wrapper } from './styles';

export default function HeaderPublic() {
  return (
    <Wrapper>
      <Content>
        <Picture src={logo} />
      </Content>
    </Wrapper>
  );
}
