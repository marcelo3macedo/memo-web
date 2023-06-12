import IconLarge from '@components/icons/IconLarge';
import { backAction } from '@store/mods/navigate/actions';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HeaderMain from '../HeaderMain';

import { Content, Header, Wrapper } from './styles';

export default function HeaderSecondary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMain = location.pathname === '/main';

  function backClick() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          {isMain ? (
            <HeaderMain />
          ) : (
            <IconLarge name='back' action={backClick} />
          )}
        </Header>
      </Content>
    </Wrapper>
  );
}
