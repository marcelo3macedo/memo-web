import IconMedium from '@components/icons/IconMedium';
import { signOutAction } from '@store/mods/auth/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Action, Content, Title, User, Wrapper } from './styles';

export default function MenuUser({ name }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function signOutClick() {
    dispatch(signOutAction());
  }

  return (
    <Wrapper>
      <Content onClick={signOutClick}>
        <User>
          <Title>
            {t('account.of')} {name}
          </Title>
        </User>
        <Action>
          <IconMedium name='signOut' />
        </Action>
      </Content>
    </Wrapper>
  );
}
