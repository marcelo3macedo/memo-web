import logo from '@assets/logo.png';
import { LogoMediumImage } from '@components/elements/images/logoMedium';
import IconHigh from '@components/icons/IconHigh';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_HOME } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Content, Header, IconArea, Wrapper } from './styles';

export default function HeaderMobile({ action }: any) {
  const theme = useTheme() as any;
  const dispatch = useDispatch();

  function goHome() {
    dispatch(
      navigatePush({
        route: RouteOptions.home,
        path: PATH_HOME
      })
    );
  }

  return (
    <Wrapper>
      <Content>
        <IconArea onClick={action}>
          <IconHigh name={'list'} style={{ fill: theme.LIGHT_COLOR }} />
        </IconArea>
        <Header onClick={goHome}>
          <LogoMediumImage src={logo} />
        </Header>
        <Header></Header>
      </Content>
    </Wrapper>
  );
}
