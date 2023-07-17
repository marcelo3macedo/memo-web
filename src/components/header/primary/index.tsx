import logo from '@assets/logo.png';
import DetailsApp from '@components/app/details';
import { LogoMediumImage } from '@components/elements/images/logoMedium';
import MenuPrimary from '@components/menu/primary';

import { Content, Header, Infos, MenuArea, Wrapper } from './styles';

export default function HeaderPrimary() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <LogoMediumImage src={logo} />
        </Header>
        <Infos>
          <DetailsApp />
        </Infos>
        <MenuArea>
          <MenuPrimary />
        </MenuArea>
      </Content>
    </Wrapper>
  );
}
