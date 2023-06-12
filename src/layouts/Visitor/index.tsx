import logo from '@assets/logoHorizontal.png';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { PATH_SIGN_IN } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Action,
  Body,
  Content,
  Header,
  Image,
  LogoArea,
  Wrapper,
} from './styles';

export default function VisitorLayout({ children }) {
  const dispatch = useDispatch();

  function signIn() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <LogoArea>
            <Image src={logo} />
          </LogoArea>
          <Action>
            <ButtonSecondary content='Entrar' action={signIn} />
          </Action>
        </Header>
        <Body>{children}</Body>
      </Content>
    </Wrapper>
  );
}

VisitorLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
